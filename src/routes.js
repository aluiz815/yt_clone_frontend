import React from "react";
import { Switch, Route } from "react-router-dom";
import Initial from "./pages/Initial";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import VideoManager from "./pages/VideoManager";
import Video from "./pages/Video";
export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Initial} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/upload" component={Upload} />
      <Route path="/manager" component={VideoManager} />
      <Route path="/video" component={Video} />
    </Switch>
  );
}
