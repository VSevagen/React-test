import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { AppWrapper, GlobalStyle } from "./components/styled";
import Overview from "./pages/overview";
import Create from "./pages/create";
import View from "./pages/view";
import Edit from "./pages/edit";

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
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/view" component={View} />
          <Route path="/" component={Overview} />
        </Switch>
      </AppWrapper>
      <GlobalStyle />
    </Router>
  );
};

export default App;
