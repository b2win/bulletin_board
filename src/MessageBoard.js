import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const MessageBoardBlock = styled.div`
  background: #d6ddbe;
  width: 800px;
  margin: 2rem;

  .head th:first-child {
    background: #e7e6b0;
    width: 60px;
    box-sizing: border-box;
  }
  .head th {
    background: #e7e6b0;
    width: 250px;
    box-sizing: border-box;
  }
  .message {
    height: 2rem;
    align-items: center;
    box-sizing: border-box;
  }
  .message td:first-child {
    width: 60px;
  }
  .message td {
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    width: 250px;
    box-sizing: border-box;
    text-align: center;
  }
`;

function MessageBoard() {
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
    <MessageBoardBlock>
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
    </MessageBoardBlock>
  );
}

export default MessageBoard;
