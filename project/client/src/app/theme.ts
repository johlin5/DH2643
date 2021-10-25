import { createTheme } from "@material-ui/core";

// Signal colors
export const ERROR_RED = "#FC3C43";
export const SUCESS_GREEN = "#8FCB9B";
export const WARNING_YELLOW = "#F9D362";
export const INFO_BLUE = "#89BBE4";
export const BASE_GREY = "#2C2C2C";

// Primary colors
export const RED = "#F74E31";
export const SAND = "#FBBF7E";
export const GREEN = "#ABCA90";
export const TURQUOISE = "#28B4B1";
export const PURPLE = "#58395C";
export const WHITE = "#FFFFFF";

export const ThemeColors = [SAND, GREEN, TURQUOISE, SUCESS_GREEN, WARNING_YELLOW];

export const theme = createTheme({
  props: {
    MuiUseMediaQuery: {
      noSsr: true
    }
  },
  palette: {
    primary: {
      main: PURPLE,
      contrastText: WHITE
    },
    secondary: {
      main: ERROR_RED,
      contrastText: WHITE
    },
    success: {
      main: SUCESS_GREEN,
      contrastText: WHITE
    },
    background: {
      default: "#F3F3F2"
    }
  },

  typography: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(",")
  },
  overrides: {
    // MuiListItem: {
    //   button: {
    //     "&:hover": {
    //       backgroundColor: "#133856",
    //       color: color.WHITE,
    //     },
    //     "&$selected": {
    //       backgroundColor: "#080A5C",
    //       color: color.WHITE,
    //     },
    //     "&$selected:hover": {
    //       backgroundColor: "#080A5C",
    //       color: color.WHITE,
    //     },
    //   },
    // },
  }
});
