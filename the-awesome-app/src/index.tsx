import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppThemeContext } from "./context/AppThemeContext";
import AppThemeProvider from "./context/AppThemeProvider";
import AppErrorBoundary from "./components/AppErrorBoundary";
import MuiApp from './MuiApp';
import { accessTokenInterceptor } from "./fetch-interceptor/interceptor";


accessTokenInterceptor();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppErrorBoundary>
      <AppThemeProvider>
        <Provider store={store}>
          {/* <App /> */}
          <MuiApp/>
        </Provider>
      </AppThemeProvider>
    </AppErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
