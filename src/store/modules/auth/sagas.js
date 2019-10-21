import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { signInSuccess, signFailure } from "./actions";
import history from "../../../routes/history";
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, "users/login", {
      email,
      password
    });
    const { token } = response.data;
    localStorage.setItem("userToken", token);
    yield put(signInSuccess(token));

    history.push("/dashboard");
  } catch (error) {
    toast.error("Falha na autenticacao, verifique seus dados");
    yield put(signFailure());
  }
}
export function* signOut() {
  localStorage.removeItem("userToken");
  history.push("/");
}
export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut)
]);
