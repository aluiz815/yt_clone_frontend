import React from "react";
import { Route, Redirect } from "react-router-dom";
import { store } from "../store";
//Redirecionamento se o usuario nao estiver logado
export default function RouteRedirect({
  component: Component,
  isPrivate = false,
  isInitial = false,
  isLogin = false,
  isRegister = false,
  ...rest
}) {
  const { signed } = store.getState().auth;
  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }
  if (signed && isInitial) {
    return <Redirect to="/dashboard" />;
  }
  if (signed && isLogin) {
    return <Redirect to="/dashboard" />;
  }
  if (signed && isRegister) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}
