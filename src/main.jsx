import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import EmployeeProvider from "./context/EmployeeContext";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 <EmployeeProvider>
  <BrowserRouter>
    <App />
    <Toaster
     position ="top-right"
     toastOption={{
      duration: 2500,
     }}
     />
  </BrowserRouter>
</EmployeeProvider>
);