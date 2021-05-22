import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleBlock } from "./StyleBlock";

function Board() {
  const [board, setBoard] = useState(null);
  // const onClick = () => {
  //   axios
  //     .get(
  //       // "http://ec2-3-34-188-245.ap-northeast-2.compute.amazonaws.com/boards"
  //       "https://jsonplaceholder.typicode.com/todos/1"
  //     )
  //     .then((response) => setBoard(response.data));
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "/boards"
          "https://jsonplaceholder.typicode.com/users/"
        );
        setBoard(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <button onClick={onClick}>게시판</button> */}
      {board && (
        <>
          <div>
            <table style={{ width: "1000px" }}>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>등록일</th>
              </tr>
            </table>
            {board.map((list) => (
              <table style={{ width: "700px" }}>
                <tr>
                  <th>{list.id}</th>
                  <th>{list.name}</th>
                  <th>{list.email}</th>
                  <th>{list.phone}</th>
                </tr>
              </table>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Board;
