import { createTheme } from "@material-ui/core";

// Signal colors
export const ERROR_RED = "#FC3C43";
export const SUCESS_GREEN = "#8FCB9B";
export const WARNING_YELLOW = "#F9D362";
export const INFO_BLUE = "#89BBE4";
export const BASE_GREY = "#2C2C2C";

// Primary colors
export const LAPIZ = "#336699";
export const DARK_SKY_BLUE = "#86BBD8";
export const CHARCOAL = "#2F4858";
export const GRANNY_SMITH_APPLE = "#9EE493";
export const NYANZA = "#DAF7DC";
export const WHITE = "#FFFFFF";

export const theme = createTheme({
  props: {
    MuiUseMediaQuery: {
      noSsr: true
    }
  },
  palette: {
    primary: {
      main: CHARCOAL,
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
      default: NYANZA
    }
  },

  typography: {
    fontFamily: "Open Sans"
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
