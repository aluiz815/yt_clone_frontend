import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import "./config/ReactotronConfig";
import Routes from "./routes/index";
import GlobalStyle from "./global/global";
import { store, persistor } from "./store";
import history from "./routes/history";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={history}>
              <GlobalStyle />
              <Routes />
              <ToastContainer autoClose={3000} />
            </Router>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
