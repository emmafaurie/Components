/* eslint-disable indent */
import { Component, Fragment, h, render } from "preact";
export { h, render };

import { get, submitData } from "./ajax";

//mui
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

//components
import { Collection } from "./_localComponents/collection";
import { Question } from "./_localComponents/question";
import { Question as QuestionSkeleton } from "./_skeletons/question";

//types
import { LibraryAppProps, LibraryAppState, TeacherType } from "./types";
import { CollectionType, QuestionType } from "./_localComponents/types";

//style
import { prefixer } from "stylis";
import { ThemeProvider } from "@mui/material/styles";
import saltise from "./theme";

//cache
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

export class App extends Component<LibraryAppProps, LibraryAppState> {
  constructor(props: LibraryAppProps) {
    super(props);
    this.state = {
      collections: [],
      height: 0,
      questionLoading: true,
      questions: [],
      teacher: undefined,
      type: 1,
    };
  }

  collections = () => {
    return (
      <Grid container spacing="20px">
        {this.state.collections.map(
          (collection: CollectionType, i: number) => (
            <Grid key={i} item xs={6}>
              <Collection
                gettext={this.props.gettext}
                getHeight={this.getHeight}
                logo={this.props.logo}
                minHeight={this.state.height}
                collection={collection}
                toggleBookmarked={() =>
                  this.handleCollectionBookmarkClick(collection.follow_url)
                }
              />
            </Grid>
          ),
        )}
      </Grid>
    );
  };

  assignments = () => {
    return;
  };

  questions = () => {
    return (
      <Stack spacing="10px">
        {!this.state.questionLoading ? (
          [...this.state.questions].map(
            (question: QuestionType, i: number) => (
              <Question
                key={i}
                bookmarked={this.state.teacher?.favourite_questions?.includes(
                  question.pk,
                )}
                gettext={this.props.gettext}
                question={question}
                toggleBookmarked={() =>
                  this.handleQuestionBookmarkClick(question.pk)
                }
              />
            ),
          )
        ) : (
          <Fragment>
            <QuestionSkeleton />
            <QuestionSkeleton />
            <QuestionSkeleton />
            <QuestionSkeleton />
            <QuestionSkeleton />
          </Fragment>
        )}
      </Stack>
    );
  };

  sync = async (): Promise<void> => {
    // Load teacher info
    try {
      const teacher = (await get(this.props.urls.teacher)) as TeacherType;

      this.setState({
        teacher,
      });
    } catch (error: any) {
      console.error(error);
    }

    // Load collections
    try {
      const collections = await get(this.props.urls.collections);

      this.setState(
        {
          collections: (collections as any).results.sort(
            (a: CollectionType, b: CollectionType) =>
              +(b?.followed_by_user || false) -
              +(a?.followed_by_user || false),
          ) as CollectionType[],
        },
        () => console.info(this.state),
      );
    } catch (error: any) {
      console.error(error);
    }

    // Load assignments

    // Load questions
    try {
      this.setState({ questionLoading: true });
      const questions = (await get(
        this.props.urls.questions,
      )) as QuestionType[];

      this.setState(
        {
          questionLoading: false,
          questions: questions.sort((a: QuestionType, b: QuestionType) => {
            if (this.state.teacher) {
              return (
                +this.state.teacher?.favourite_questions.includes(b.pk) -
                +this.state.teacher?.favourite_questions.includes(a.pk)
              );
            }
            return 0;
          }),
        },
        () => console.info(this.state),
      );
    } catch (error: any) {
      console.error(error);
    }
  };

  componentDidMount(): void {
    this.sync();
  }

  handleCollectionBookmarkClick = async (
    url: string | undefined,
  ): Promise<void> => {
    if (url) {
      try {
        await submitData(url, {}, "PUT");

        const collections = await get(this.props.urls.collections);
        this.setState({
          collections: (collections as any).results.sort(
            (a: CollectionType, b: CollectionType) =>
              +(b?.followed_by_user || false) -
              +(a?.followed_by_user || false),
          ) as CollectionType[],
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  handleQuestionBookmarkClick = async (pk: number): Promise<void> => {
    // Some extra logic needed here:
    // - If user unbookmarks a question they don't own, drop from state
    // - If user bookmarks or unbookmarks a question they own, resort

    if (this.state.teacher) {
      const index = this.state.teacher.favourite_questions.indexOf(pk);
      const newFavouriteQuestions = [
        ...this.state.teacher.favourite_questions,
      ];
      if (index >= 0) {
        newFavouriteQuestions.splice(index, 1);
      } else {
        newFavouriteQuestions.unshift(pk);
      }
      try {
        const teacher = (await submitData(
          this.props.urls.teacher,
          { favourite_questions: newFavouriteQuestions },
          "PUT",
        )) as TeacherType;

        let _questions = [...this.state.questions];

        if (
          _questions.filter((q) => q.pk == pk)[0].user.username ==
          this.props.user.username
        ) {
          _questions.sort((a: QuestionType, b: QuestionType) => {
            return (
              +newFavouriteQuestions.includes(b.pk) -
              +newFavouriteQuestions.includes(a.pk)
            );
          });
        } else if (index >= 0) {
          _questions = _questions.filter((q) => q.pk != pk);
        }

        this.setState(
          {
            questions: _questions,
            teacher,
          },
          () => console.info(this.state),
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  getHeight = (height: number) => {
    if (height > this.state.height) {
      this.setState({ height });
    }
  };

  cache = createCache({
    key: "nonced",
    nonce: this.props.nonce,
    prepend: true,
    stylisPlugins: [prefixer],
  });

  render() {
    return (
      <ThemeProvider theme={saltise}>
        <CacheProvider value={this.cache}>
          <Box margin="0 auto" maxWidth="980px" width="100%">
            <Stack direction="row" spacing={1}>
              <Chip
                clickable={this.state.type != 1}
                label={this.props.gettext("Collections")}
                onClick={() => this.setState({ type: 1 })}
                variant={this.state.type == 1 ? "selected" : "outlined"}
              />
              <Chip
                clickable={this.state.type != 2}
                label={this.props.gettext("Assignments")}
                onClick={() => this.setState({ type: 2 })}
                variant={this.state.type == 2 ? "selected" : "outlined"}
              />
              <Chip
                clickable={this.state.type != 3}
                label={this.props.gettext("Questions")}
                onClick={() => this.setState({ type: 3 })}
                variant={this.state.type == 3 ? "selected" : "outlined"}
              />
            </Stack>
            <Box marginTop="40px">
              {this.state.type == 1
                ? this.collections()
                : this.state.type == 2
                ? this.assignments()
                : this.questions()}
            </Box>
          </Box>
        </CacheProvider>
      </ThemeProvider>
    );
  }
}
