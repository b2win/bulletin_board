import Board from "./Board";
import Categories from "./Categories";
import Corona from "./Corona";
import BusinessBoard from "./BusinessBoard";
import EntertainmentBoard from "./EntertainmentBoard";
import NewsBulletin from "./NewsBulletin";
import { Route } from "react-router-dom";

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());

function App() {
  return (
    <>
      {/* <Categories /> */}
      {/* <Board /> */}
      {/* <BusinessBoard /> */}
      {/* <EntertainmentBoard /> */}
      {/* <Corona /> */}
      <Route path="/:category?" component={NewsBulletin} />
    </>
  );
}

export default App;
