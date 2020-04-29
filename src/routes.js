import React, { Component } from "react";
import DefaultPage from "./pages/defaultPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { isAutheticated } from './auth'

class Routes extends Component {
  render() {
    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={(props) =>
    //       isAutheticated() ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    //       )
    //     }
    //   />
    // )

    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={DefaultPage} />
          {/* <PrivateRoute path="/recursoHumanos" component={PersonnelResources} />
          <PrivateRoute path="/dashboard" component={DashBoard} />
          <PrivateRoute path="/financer" component={Financer} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
