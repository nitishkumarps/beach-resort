import React, { Fragment } from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import WhatsappClick from "./components/WhatsappClick";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <WhatsappClick />
    </Fragment>
  );
}

export default App;
