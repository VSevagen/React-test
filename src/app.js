import React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { AppWrapper, GlobalStyle } from "./components/styled";
import { routes } from "./routes";

WebFont.load({
  google: {
    families: ["Open Sans:400,600,700", "sans-serif"],
  },
});

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </AppWrapper>
      <GlobalStyle />
    </Router>
  );
};

export default App;
