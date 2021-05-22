import React, { useEffect, useState } from "react";
import axios from "axios";

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

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Corona() {
//   const [virusInfo, setVirusInfo] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=3XfEcgs0f7zzFzM20eON8HHY3yhxyYIRFTnrtzot2THMlkFXP8yqZog2aInHHoPaliYK0SgriMXt4Fr1FKK0lw%3D%3D"
//         );
//         setVirusInfo(response.data);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//       virusInfo.map((list) =>
//       (
//       <table className="message">
//       <tr>
//         <td>{list.id}</td>
//         <td>{list.name}</td>
//         <td>black9p</td>
//         <td>{list.phone}</td>
//       </tr>
//     </table>
//     ))
// );

// export default Corona;
