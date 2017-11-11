import React from "react";
import ReactDOM from "react-dom";
import Moment from "moment";
import "./index.css";
import Streak from "./Streak";
import registerServiceWorker from "./registerServiceWorker";

let startingDate = Moment("2017-11-07");

ReactDOM.render(
  <Streak start={startingDate} />,
  document.getElementById("root")
);

registerServiceWorker();
