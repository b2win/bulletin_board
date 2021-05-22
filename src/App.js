import Board from "./Board";
import Categories from "./Categories";
import Corona from "./Corona";
import BusinessBoard from "./BusinessBoard";

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());

function App() {
  return (
    <>
      <Categories />
      {/* <Board /> */}
      <BusinessBoard />
      {/* <Corona /> */}
    </>
  );
}

export default App;
