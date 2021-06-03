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
      <Route path="/:category?" component={NewsBulletin} />
    </>
  );
}

export default App;
