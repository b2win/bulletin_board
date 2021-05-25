import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleBlock } from "./StyleBlock";

// http://api.openweathermap.org/data/2.5/weather?lat=37.56826&lon=126.977829&APPID=358a5ab2e834a175f6271a462f8acd8f
// http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=358a5ab2e834a175f6271a462f8acd8f

// return axios.get(
//   `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cb7f2c87059e431aac872c465d1287bd`
// );

// https://newsapi.org/v2/top-headlines?country=kr&apiKey=cb7f2c87059e431aac872c465d1287bd

function BusinessBoard() {
  const [bulletin, setBulletin] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
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
