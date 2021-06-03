import Board from "./Board";
import Categories from "./Categories";
import Corona from "./Corona";
import BusinessBoard from "./BusinessBoard";
import EntertainmentBoard from "./EntertainmentBoard";
import NewsBulletin from "./NewsBulletin";
import { Route } from "react-router-dom";
import PageChange from "./PageChange";

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());

function App() {
  return (
    <>
      {/* <PageChange /> */}
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
