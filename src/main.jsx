import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import CustomChakraProvider from "./ChakraProvider";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <CustomChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomChakraProvider>
  </React.StrictMode>
);
