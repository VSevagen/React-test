import React, { lazy, Suspense } from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { AppWrapper, GlobalStyle } from "./components/styled";

const Overview = lazy(() => import("./pages/overview"));
const Create = lazy(() => import("./pages/create"));
const View = lazy(() => import("./pages/view"));
const Edit = lazy(() => import("./pages/edit"));

// Lazy loading our routes
const routes = [
  {
    path: "/create",
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <Create />
      </Suspense>
    ),
  },
  {
    path: "/edit/:id",
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <Edit />
      </Suspense>
    ),
  },
  {
    path: "/view",
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <View />
      </Suspense>
    ),
  },
  {
    path: "/",
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <Overview />
      </Suspense>
    ),
  },
];

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
