import { Component, createRef, Fragment, h } from "preact";

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";

import BookmarksIcon from "@mui/icons-material/Bookmarks";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

import { Collection as CollectionSkeleton } from "../_skeletons/collection";

import saltise from "../theme";
import { Tag } from "../styledComponents";
import {
  CollectionBlockProps,
  CollectionBlockState,
  CollectionProps,
  CollectionType,
} from "./types";

const theme = saltise;

export class Collection extends Component<CollectionProps> {
  ref = createRef();

  componentDidMount(): void {
    this.resize();
  }

  componentDidUpdate(): void {
    this.resize();
  }

  resize = (): void => {
    if (this.ref.current) {
      const height = this.ref.current.getBoundingClientRect().height;
      if (this.props.minHeight != height) {
        this.props.getHeight(height);
      }
    }
  };

  avatar = () => {
    return (
      <Avatar sx={{ width: 50, height: 50 }}>
        <SvgIcon viewBox={"0 0 50 50"} sx={{ fontSize: 50 }}>
          <circle cx="25" cy="25" r="25" fill="#0D2666" />
          <g clip-path="url(#a)">
            <path
              d="M25.145 14.42a.557.557 0 0 0 .798.303l4.822 1.547 1.596-1.253-6.22-1.089a.56.56 0 0 0-.995.492Z"
              fill="#FFB6B6"
            />
            <path
              d="M34.078 16.487s-.043-.107-.62.126c-.716.29-4.53.096-4.741-.944a.437.437 0 0 1-.53.076l.596-1.308c.31-.1.479-.173.499-.047l.933-.055 3.778.636.105 1.305-.02.211Z"
              fill="#2BA789"
            />
            <path
              d="m32.89 15.176 1.877-.163 1.759.804.988 13.666-3.877-1.793-1.663.46.916-12.974Z"
              fill="#2BA789"
            />
            <path
              d="M37.506 39.025h-.711l-.339-2.745h1.05v2.745Z"
              fill="#FFB6B6"
            />
            <path
              d="M37.689 39.715h-2.295v-.03a.893.893 0 0 1 .893-.893l.42-.318.781.319h.2v.922Z"
              fill="#F2E9FF"
            />
            <path
              d="m34.748 38.576-.694.157-.935-2.603 1.025-.232.605 2.678Z"
              fill="#FFB6B6"
            />
            <path
              d="m35.078 39.21-2.24.505-.005-.029a.893.893 0 0 1 .674-1.068l.339-.402.833.138.195-.044.204.9Z"
              fill="#F2E9FF"
            />
            <path
              d="M38.408 22.241c.334 1.006.299 2.099-.08 3.271l-.162 6.602c.268.295.309 2.93-.103 3.79-.55 1.148-.044 1.301-.434 2.063h-1.128l-.522-3.45-.037-2.798c-.15-.355-.027-1.604-.027-1.604l-.043-2.59-2.035 4.537c.922.79.839 3.338.854 4.469l.302 1.334-1.389.124-.613-1.81-.689-1.114c-.351-1.976-.455-3.426-.156-4.018l2.043-7.6 4.22-1.206Z"
              fill="#872CFF"
            />
            <path
              d="m38.553 21.905-.186-.372c-.228-1.411-.453-2.727-.147-3.91.02-1.034-.3-2.005-1.187-2.535l-.4-.24-.203-.513-1.865.045-.005.674-.668 1.065v.004l.042 5.797.184.598-.278.696.147.444 3.677-.588.427-.069a.78.78 0 0 0 .462-1.097Z"
              fill="#3F3D56"
            />
            <path
              opacity=".2"
              d="M38.635 22.295a.767.767 0 0 1-.05.236l-.352.409a.763.763 0 0 1-.142.062l-.427.068.618-1.163-1.36-2.976 1.713 3.364Z"
              fill="#000"
            />
            <path
              d="M9.75 34.32a8.164 8.164 0 0 1-1.29-.09c-.398-.067-.6-.163-.6-.284v-.002l.743-5.65-.374-1.072a.297.297 0 0 1 .283-.394l2.458.025a.297.297 0 0 1 .278.39l-.35 1.05.743 5.65c0 .298-1.188.376-1.89.376ZM20.552 34.32a8.163 8.163 0 0 1-1.29-.09c-.398-.067-.6-.163-.6-.284v-.002l.742-5.65-.373-1.072a.297.297 0 0 1 .283-.394l2.458.025a.298.298 0 0 1 .278.39l-.35 1.05.742 5.65c0 .298-1.188.376-1.89.376ZM15.489 34.32a8.164 8.164 0 0 1-1.29-.09c-.399-.067-.6-.163-.6-.284v-.002l.742-5.65-.374-1.072a.297.297 0 0 1 .284-.394l2.457.025a.297.297 0 0 1 .279.39l-.35 1.05.742 5.65c0 .298-1.188.376-1.89.376Z"
              fill="#F2F2F2"
            />
            <path
              d="M23.101 39.721c-1.174 0-2.269-.076-3.083-.213-1.004-.17-1.493-.417-1.493-.755v-.01L20.29 25.32l-.883-2.53a.776.776 0 0 1 .104-.718.768.768 0 0 1 .648-.327l5.844.06a.786.786 0 0 1 .737 1.035l-.826 2.479 1.763 13.424v.005c0 .364-.552.623-1.69.79-1.117.165-2.39.183-2.885.183Z"
              fill="#fff"
            />
            <path
              d="M23.101 39.721c-1.174 0-2.269-.076-3.083-.213-1.004-.17-1.493-.417-1.493-.755v-.01L20.29 25.32l-.883-2.53a.776.776 0 0 1 .104-.718.768.768 0 0 1 .648-.327l5.844.06a.786.786 0 0 1 .737 1.035l-.826 2.479 1.763 13.424v.005c0 .364-.552.623-1.69.79-1.117.165-2.39.183-2.885.183Zm-2.96-17.816a.611.611 0 0 0-.5.26.618.618 0 0 0-.083.572l.895 2.566-.003.019-1.764 13.436c0 .132.177.391 1.359.591.805.137 1.89.212 3.056.212 1.024 0 2.094-.068 2.862-.181.98-.145 1.546-.373 1.553-.628l-1.767-13.449.838-2.514a.624.624 0 0 0-.587-.823l-5.845-.06-.014-.001Z"
              fill="#3F3D56"
            />
            <path
              opacity=".5"
              d="M26.432 37.11H19.77l1.056-7.141.029-.197.44-2.973c.026-.182.235-.041.383-.15.916-.675 1.844-.694 2.78-.044.144.1.344-.017.371.157l.462 2.982.045.289 1.096 7.078Z"
              fill="#6C63FF"
            />
            <path
              d="M25.61 38.11h-5.025a.916.916 0 0 1-.907-1.05l1.468-9.929a.29.29 0 0 1 .471-.183c.895.716 1.87.7 2.899-.048a.288.288 0 0 1 .398.057.29.29 0 0 1 .059.136l1.543 9.96a.916.916 0 0 1-.906 1.058Z"
              fill="#6C63FF"
            />
            <path
              d="M23.587 36.947h-2.855v.16h2.855v-.16ZM23.587 35.983h-2.855v.16h2.855v-.16ZM23.587 35.02h-2.855v.16h2.855v-.16ZM23.587 34.057h-2.855v.16h2.855v-.16ZM23.587 33.093h-2.855v.161h2.855v-.16ZM25.47 30.566a2.164 2.164 0 0 1-1.697.622c-.355-.032-.679-.165-.99-.332-.322-.172-.634-.379-.99-.475-.312-.084-.682-.096-.95.113a.13.13 0 0 1-.154.004l.03-.209c.299-.208.661-.24 1.017-.169.716.145 1.26.737 1.993.822a1.922 1.922 0 0 0 1.693-.68l.001-.001.047.305Z"
              fill="#fff"
            />
            <path
              d="m34.756 15.01 1.877-.162 1.759.805.988 13.665-3.877-1.793-1.663.46.916-12.974Z"
              fill="#2BA789"
            />
            <path
              d="M25.494 14.994a.33.33 0 1 0 0-.659.33.33 0 0 0 0 .659ZM24.945 19a.33.33 0 1 0 0-.658.33.33 0 0 0 0 .658ZM23.19 21.36a.33.33 0 1 0 0-.658.33.33 0 0 0 0 .658Z"
              fill="#6C63FF"
            />
            <path
              d="M31.41 23.911v-3.535a.27.27 0 0 1 .27-.27h2.67a.27.27 0 0 1 .27.27v3.535a.27.27 0 0 1-.27.27h-2.67a.27.27 0 0 1-.27-.27Z"
              fill="#E6E6E6"
            />
            <path
              d="M31.615 22.844V20.57a.253.253 0 0 1 .253-.252h2.294a.253.253 0 0 1 .253.252v3.146a.253.253 0 0 1-.253.253h-1.421a1.128 1.128 0 0 1-1.126-1.126Z"
              fill="#fff"
            />
            <path
              d="M31.986 21.206a.247.247 0 0 1 .247-.247h1.592a.247.247 0 0 1 0 .493h-1.592a.247.247 0 0 1-.247-.247ZM31.986 21.974a.247.247 0 0 1 .247-.247h1.592a.247.247 0 0 1 0 .494h-1.592a.247.247 0 0 1-.247-.247ZM31.986 22.742a.247.247 0 0 1 .247-.247h1.592a.247.247 0 0 1 0 .494h-1.592a.247.247 0 0 1-.247-.247Z"
              fill="#E6E6E6"
            />
            <path
              d="M33.585 24.521a.556.556 0 0 0 .256-.813l1.935-1.758.68-2.627-1.206-.1-.368 2.06-1.846 2.273a.56.56 0 0 0 .549.965Z"
              fill="#FFB6B6"
            />
            <path
              d="M36.642 16.95s.293.005.161.613c-.106.487-.508 3.227-.828 3.84a.437.437 0 0 1 .105.525l-1.34-.52c-.117-.304.079-.399.204-.426l-.025-.954.193-2.431 1.317-.653.213.007Z"
              fill="#2BA789"
            />
            <path
              d="M37.037 12.45a1.737 1.737 0 0 1-3.442-.469l.003-.024a1.737 1.737 0 0 1 3.438.492Z"
              fill="#FFB8B8"
            />
            <path
              d="M36.595 13.344c.089-.181.18-.375.155-.576-.025-.2-.221-.392-.414-.332-.115.035-.203.15-.323.155-.166.008-.261-.182-.313-.34l-.21-.643a1.739 1.739 0 0 1-1.446.327c-.195-.045-.392-.132-.507-.296-.115-.165-.114-.42.043-.544.077-.06.18-.084.254-.15a.284.284 0 0 0-.227-.493l.53-.066-.158-.286c.114.09.272.102.414.076.143-.025.277-.084.416-.123.67-.188 1.448.139 1.782.748a.679.679 0 0 1 .74.214c.141.18.18.42.185.649.01.452-.088.899-.287 1.305-.057.128-.139.245-.24.342a.482.482 0 0 1-.388.127"
              fill="#FFC911"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M7 10h35v29.791H7z" />
            </clipPath>
          </defs>
        </SvgIcon>
      </Avatar>
    );
  };

  discipline = () => {
    if (this.props.collection.discipline) {
      return (
        <Tag sx={{ backgroundColor: theme.palette.primary1.main }}>
          <Typography>{this.props.collection.discipline?.title}</Typography>
        </Tag>
      );
    }
  };

  bookmarkIcon = () => {
    if (this.props.bookmarked !== undefined && this.props.showBookmark) {
      return (
        <Checkbox
          checked={this.props.bookmarked}
          icon={<BookmarkAddOutlinedIcon />}
          checkedIcon={<BookmarkAddedIcon />}
          onChange={this.props.toggleBookmarked}
          onClick={(evt: MouseEvent) => evt.stopPropagation()}
          sx={{
            color: "primary.main",
            "&.Mui-checked": {
              color: "primary.main",
            },
          }}
          title={
            this.props.bookmarked
              ? this.props.gettext("Remove from library")
              : this.props.gettext("Add to library")
          }
        />
      );
    }
  };

  render() {
    return (
      <Card>
        <CardActionArea
          disableRipple={true}
          onClick={() => (window.location.href = this.props.collection.url)}
          sx={{ userSelect: "text" }}
        >
          <CardHeader
            avatar={this.avatar()}
            action={() =>
              this.props.collection.featured ? (
                <img src={this.props.logo} height="30" />
              ) : (
                ""
              )
            }
            title={this.props.collection.title}
            subheader={this.props.gettext(
              "From ".concat(this.props.collection.user.username),
            )}
            sx={{ cursor: "pointer" }}
          />
          <CardContent ref={this.ref} sx={{ minHeight: this.props.minHeight }}>
            <Typography tag="p">
              {this.props.collection.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" spacing="5px">
              {this.discipline()}
              <Tag
                sx={{
                  bgcolor: "white",
                  borderStyle: "solid",
                  paddingTop: "3px",
                  paddingBottom: "3px",
                }}
              >
                <BookmarksIcon fontSize="small" />
                <Typography>{this.props.collection.follower_count}</Typography>
              </Tag>
            </Stack>
            {this.bookmarkIcon()}
          </CardActions>
        </CardActionArea>
      </Card>
    );
  }
}

export class CollectionBlock extends Component<
  CollectionBlockProps,
  CollectionBlockState
> {
  constructor(props: CollectionBlockProps) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  getHeight = (height: number) => {
    if (height > this.state.height) {
      this.setState({ height });
    }
  };

  render() {
    return (
      <Grid container spacing="20px">
        {!this.props.loading ? (
          this.props.collections.map(
            (collection: CollectionType, i: number) => (
              <Grid key={i} item xs={6}>
                <Collection
                  bookmarked={this.props.teacher?.bookmarked_collections?.includes(
                    collection.pk,
                  )}
                  collection={collection}
                  gettext={this.props.gettext}
                  getHeight={this.getHeight}
                  logo={this.props.logo}
                  minHeight={this.state.height}
                  showBookmark={
                    this.props.teacher !== undefined &&
                    this.props?.teacher?.user?.username
                      ? this.props.teacher.user.username !==
                        collection.user.username
                      : false
                  }
                  toggleBookmarked={() =>
                    this.props.handleBookmarkClick(collection.pk)
                  }
                />
              </Grid>
            ),
          )
        ) : (
          <Fragment>
            <Grid item xs={6}>
              <CollectionSkeleton />
            </Grid>
            <Grid item xs={6}>
              <CollectionSkeleton />
            </Grid>
            <Grid item xs={6}>
              <CollectionSkeleton />
            </Grid>
            <Grid item xs={6}>
              <CollectionSkeleton />
            </Grid>
          </Fragment>
        )}
      </Grid>
    );
  }
}
