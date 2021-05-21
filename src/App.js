import Board from "./Board";
import Categories from "./Categories";
import MessageBoard from "./MessageBoard";

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());

function App() {
  return (
    <>
      <Categories />
      {/* <Board /> */}
      <MessageBoard />
    </>
  );
}

export default App;
