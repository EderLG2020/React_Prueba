import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, User } from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting title="Hola mundo 1" name="1" />
    <Greeting title="Hola mundo 2" name="2" />
    <Greeting title="Hola mundo 3" name="3" />
    <Greeting title="Hola mundo 4" name="4" />
    <Greeting title="Hola mundo 5" name="5" />
    <User />
  </>
);
