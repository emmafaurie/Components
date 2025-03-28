import { h } from "preact";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import IconButton from "@mui/material/IconButton";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

import { Tag } from "../styledComponents";
import { AssignmentBisProps } from "./types";

export function AssignmentBis({
  gettext,
  assignment,
  bookmarked,
  showBookmark,
  toggleBookmarked,
}: AssignmentBisProps): JSX.Element {
  const handlePreview = () => {
    if (assignment?.urls?.preview) {
      window.location.assign(assignment.urls.preview);
    }
  };

  const handleUpdate = (evt: MouseEvent) => {
    evt.stopPropagation();
    if (assignment?.urls?.update) {
      window.location.assign(assignment.urls.update);
    }
  };

  const bookmarkIcon = () => {
    if (bookmarked !== undefined && showBookmark) {
      return (
        <Checkbox
          checked={bookmarked}
          icon={<BookmarkAddOutlinedIcon />}
          checkedIcon={<BookmarkAddedIcon />}
          onChange={toggleBookmarked}
          onClick={(evt: MouseEvent) => evt.stopPropagation()}
          sx={{
            color: "primary.main",
            "&.Mui-checked": {
              color: "primary.main",
            },
            ml: "80px",
          }}
          title={
            bookmarked
              ? gettext("Remove from library")
              : gettext("Add to library")
          }
        />
      );
    }
    return <Box height="38px" ml="44px" width="38px" />;
  };

  const editIcon = () => {
    if (assignment.is_owner) {
      if (assignment.editable) {
        return (
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={handleUpdate}
            title={gettext("Edit assignment")}
          >
            <EditIcon />
          </IconButton>
        );
      }
      return (
        <IconButton aria-label="edit" disabled color="primary">
          <EditOffIcon />
        </IconButton>
      );
    }
  };

  return (
    <Card>
      <CardActionArea
        disableRipple={true}
        onClick={handlePreview}
        title={gettext("Preview assignment")}
      >
        <CardContent sx={{ padding: "10px 20px" }}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h3">{assignment.title}</Typography>
              <Typography
                variant="caption"
                sx={{
                  display:
                    assignment.owner && assignment.owner.length > 0
                      ? "block"
                      : "none",
                }}
              >
                {gettext("By")}{" "}
                {assignment.owner && assignment.owner.length > 0
                  ? assignment.owner[0]?.username
                  : ""}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Tag
                sx={{
                  mx: "10px",
                  minWidth: "102px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <FormatListBulletedIcon fontSize="small" />
                <Typography>
                  {assignment.question_count} {gettext("questions")}
                </Typography>
              </Tag>
              <Tag
                sx={{
                  mx: "10px",
                  minWidth: "102px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <QuestionAnswerIcon fontSize="small" />
                <Typography>
                  {assignment.answer_count} {gettext("answers")}
                </Typography>
              </Tag>
              {bookmarkIcon()}
              {editIcon()}
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
