import React from "react";
import ReactDOM from "react-dom/client";
// import { Greeting, User } from "./Greeting";
import Button1 from "./Button1";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Button1 text="Click" />
    <Button1 text="no click" />
    <Button1 text="casi Click" name="Eder" />
  </>
);
