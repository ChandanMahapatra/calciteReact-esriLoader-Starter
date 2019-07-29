import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CalciteThemeProvider, {
  CalciteTheme
} from "calcite-react/CalciteThemeProvider";

const CustomTheme = {
  ...CalciteTheme,
  palette: {
    ...CalciteTheme.palette,
    blue: "#2D7A31"
  }
};

ReactDOM.render(
  <CalciteThemeProvider theme={CustomTheme}>
    <App />
  </CalciteThemeProvider>,
  document.getElementById("root")
);
