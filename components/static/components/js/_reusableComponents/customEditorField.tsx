import { Box, SvgIcon, Typography } from "@mui/material";
import { h } from "preact";
import { CustomEditorFieldProps } from "./types";
import { formTheme } from "../theme";
import { CustomEditor } from "./customEditor";

import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

export const CustomEditorField = ({
  title,
  EditorIcons,
  icon,
  setValue,
  tooltip = "",
  value,
}: CustomEditorFieldProps) => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <Typography sx={{ marginLeft: "14px" }}>{title}</Typography>
        {icon && tooltip.length > 0 ? (
          <Tooltip
            arrow
            title={tooltip}
            TransitionComponent={Zoom}
            placement="right"
          >
            <SvgIcon
              sx={{
                position: "relative",
                color: formTheme.palette.primary.main,
                fontSize: "14px",
              }}
              component={icon}
            />
          </Tooltip>
        ) : null}
      </Box>
      <CustomEditor
        EditorIcons={EditorIcons}
        setValue={setValue}
        value={value}
      />
    </Box>
  );
};
