import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleBlock } from "./StyleBlock";

function BusinessBoard() {
  const [bulletin, setBulletin] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
        setBulletin(response.data);
      } catch (e) {}
    };
    fetchData();
  }, []);

  return (
    <StyleBlock>
      <>
        {bulletin && (
          <>
            <div>
              <table className="head">
                <tr>
                  <th>글번호</th>
                  <th>제목</th>
                  <th>글쓴이</th>
                  <th>전화번호</th>
                </tr>
              </table>
              {bulletin.map((list) => (
                <table className="message">
                  <tr>
                    <td>{list.id}</td>
                    <td>{list.name}</td>
                    <td>black9p</td>
                    <td>{list.phone}</td>
                  </tr>
                </table>
              ))}
            </div>
          </>
        )}
      </>
    </StyleBlock>
  );
}

export default BusinessBoard;
