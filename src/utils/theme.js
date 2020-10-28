import { createMuiTheme } from "@material-ui/core";
import { jssPreset } from "@material-ui/styles";
import { create } from "jss";

export const theme = createMuiTheme({
  overrides: {
    MuiAlert: {
      message: {
        display: "flex",
        flexDirection: "column",
      },
    },
  },
});

export const jss = create({ plugins: [...jssPreset().plugins] });
