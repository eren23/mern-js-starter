import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import NotFound from "./components/notfound/NotFound";
import RandomRoute from "./components/layout/RandomRoute";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router >
          <Switch>
            <Route path="/" exact={true} component={RandomRoute} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
