// import Board from "./Board";
// import Categories from "./Categories";
// import Corona from "./Corona";
// import BusinessBoard from "./BusinessBoard";
// import EntertainmentBoard from "./EntertainmentBoard";
// import NewsBulletin from "./NewsBulletin";
// import { Route } from "react-router-dom";

// // const express = require("express");
// // const cors = require("cors");
// // const app = express();

// // app.use(cors());

// function App() {
//   return (
//     <>
//       {/* <Categories /> */}
//       {/* <Board /> */}
//       {/* <BusinessBoard /> */}
//       {/* <EntertainmentBoard /> */}
//       {/* <Corona /> */}
//       <Route path="/:category?" component={NewsBulletin} />
//     </>
//   );
// }

// export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Post";
import Pagination from "./Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  console.log(posts);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  return (
    <div className="App">
      <Posts posts={currentPosts(posts)} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
    </div>
  );
}

export default App;
