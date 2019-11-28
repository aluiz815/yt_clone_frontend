//Importacoes necessarias para o funcionamento do app
import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Initial from "../pages/Initial";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import VideoManager from "../pages/VideoManager";
import Video from "../pages/Video";
import Header from "../components/Header";
import Search from "../pages/Search";
import VideoUpdate from "../pages/VideoUpdate";
//Rotas da aplicacao
export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Initial} isInitial />
      <Route path="/login" component={Login} isLogin />
      <Route path="/search/:page/:video" component={Search} />
      <Route path="/update/:id" component={VideoUpdate} />
      <Route path="/register" component={Register} isRegister />
      <Route path="/videos/:id" component={Video} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/upload" component={Upload} isPrivate />
      <Route path="/manager" component={VideoManager} isPrivate />
      <Route
        path="/"
        component={() => (
          <>
            <Header notLogged={"Error"} /> <h1>Esta Pagina Nao Existe</h1>
          </>
        )}
      />
    </Switch>
  );
}
