import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/store";
import "./App.scss";
import AppMain from "./containers";

function App() {
  return (
    <ReduxProvider store={store}>
      <AppMain />
    </ReduxProvider>
  );
}

export default App;
