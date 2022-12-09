import { createTheme } from "@mui/material/styles";

const primaryBlue = "#1743B3";

const saltise = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    primary: {
      main: "#1743B3",
    },
    secondary1: {
      main: "#E9EBF2",
    },
    secondary2: {
      main: " #AEAEBF",
    },
    secondary4: {
      main: "#515159",
    },
    secondaryGrey: {
      main: "#696973",
    },
    neutral: {
      main: "#90929B",
    },
    darkGrey: {
      main: "#414141",
    },
    primaryBlue: {
      main: primaryBlue,
    },
    primaryRed: {
      main: "#D70000",
    },
    primaryOrange: {
      main: "#F09326",
    },
    primaryYellow: {
      main: "#FFC911",
    },
    primaryGreen: {
      main: "#2BA789",
    },
    paleRed: {
      main: "#FFEBE6",
    },
    paleYellow: {
      main: "#FFF2C4",
    },
    paleOrange: {
      main: "#FFEBD4",
    },
    paleGreen: {
      main: "#E7FFF6",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: 12,
    root: {
      color: "#515159",
    },
    h1: {
      fontSize: "36px",
      fontWeight: 400,
      lineHeight: "49px",
      marginTop: "30px",
      marginBottom: "30px",
      color: "#515159",
    },
    h2: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
      color: "#515159",
      marginTop: "50px",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "28px",
      color: "#515159",
    },
    h4: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      color: "#515159",
    },
    h5: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "19px",
      padding: "15px",
      color: "#515159",
    },
    h6: {
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "22px",
      color: "#90929B",
    },
    tag: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
      fontFamily: ["Open Sans", "sans-serif"].join(","),
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000B26",
          color: "#fff",
          paddingLeft: 2,
          " img.logo": {
            height: 40,
            marginRight: 10,
          },
          " .MuiAvatar-root": {
            height: 30,
            width: 30,
          },
          " .MuiIconButton-root": {
            marginLeft: "15px",
            marginRight: "15px",
            color: "#fff",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          padding: "5px",
          height: "26px",
          borderRadius: "5px",
        },
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "10px 20px",
          borderRadius: "10px",
          boxShadow: "none",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "10px 0px 10px 0px",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgb(255, 255, 255, 0.1)",
        },
        vertical: {
          borderWidth: "0px",
          backgroundColor: "#EDF5FC",
          width: "3px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          padding: "20px 10px",
          backgroundColor: "#0D2666",
          color: "#fff",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: primaryBlue,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "4px 16px",
          "&:hover": {
            backgroundColor: "rgb(255, 255, 255, 0.1)",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: "14px",
        },
        fontSizeMedium: {
          fontSize: "20px",
        },
        fontSizeLarge: {
          fontSize: "24px",
        },
      },
    },
  },
});

export default saltise;
