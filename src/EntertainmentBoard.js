import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleBlock } from "./StyleBlock";

function EntertainmentBoard() {
  const [bulletin, setBulletin] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=cb7f2c87059e431aac872c465d1287bd"
        );
        setBulletin(response.data);
      } catch (e) {
        console.log(e);
      }
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
              {bulletin.articles.map((list) => (
                <table className="message">
                  <tr>
                    <td>
                      <img src={list.urlToImage} alt="Thumbnail Img" />
                    </td>
                    <td>{list.title}</td>
                    <td>black9p</td>
                    <td>{list.description}</td>
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

export default EntertainmentBoard;
