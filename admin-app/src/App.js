import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { PrivateRoute } from "./components/HOC/PrivateRoute";
import { Home } from "./containers/Home/Home";
import { Signin } from "./containers/Signin/Signin";
import { Signup } from "./containers/Signup/Signup";
import { isUserLoggedIn } from "./action/auth.action";
import Products from "./containers/Products/Products";
import Orders from "./containers/Order/Order";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
