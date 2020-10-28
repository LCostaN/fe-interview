import React from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import { jss, theme } from "../utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Redirect, Route, Router, Switch } from "react-router";
import history from "../routes/history";
import { routes } from "../routes";
import { useStyles } from "./styles";
import { Container } from "@material-ui/core";

export default function AppMain() {
  const classes = useStyles();

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <main className={classes.content}>
            <Container maxWidth="lg" className={classes.container}>
              <Switch>
                {routes.map((e, index) => (
                  <Route
                    key={index}
                    path={e.path}
                    exact={e.exact}
                    children={<e.component />}
                  />
                ))}
                <Redirect to="/" from="*" />
              </Switch>
            </Container>
          </main>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}
