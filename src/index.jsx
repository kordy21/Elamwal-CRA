import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./slices";
// import ErrorBoundary from "./ErrorBoundary";

const store = configureStore({ reducer: rootReducer, devTools: true });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ErrorBoundary> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ErrorBoundary> */}
  </StrictMode>
);
