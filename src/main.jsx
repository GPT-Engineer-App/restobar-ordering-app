import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#3c096c",
    800: "#5a189a",
    700: "#7b2cbf",
    600: "#9d4edd",
    500: "#c77dff",
  },
  background: {
    light: "#D3D3D3", // Light grey color
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "background.light",
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);