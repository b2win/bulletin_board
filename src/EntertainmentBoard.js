import React, { useEffect, useState } from "react";
import axios from "axios";
import { BulletinStyleBlock } from "./BulletinStyleBlock";

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
    <BulletinStyleBlock>
      <>
        {bulletin && (
          <>
            <div>
              <table className="head">
                <tr>
                  <th className={"thunbnail-head"}>이미지</th>
                  <th className={"title-head"}>기사제목</th>
                  <th className={"author-head"}>언론사명</th>
                  <th className={"date-head"}>날짜</th>
                </tr>
              </table>
              {bulletin.articles.map((list) => (
                <table className="message">
                  <tr>
                    <td className={"thunbnail-main"}>
                      <a
                        href={list.url}
                        target={"_blank"}
                        rel="noreferrer noopener"
                      >
                        <img
                          src={list.urlToImage}
                          alt="Thumbnail Img"
                          style={{
                            width: "200px",
                            overflow: "auto",
                            height: "100px",
                          }}
                        />
                      </a>
                    </td>
                    <td className={"title-main"}>
                      <b>
                        <a
                          href={list.url}
                          target={"_blank"}
                          rel="noreferrer noopener"
                        >
                          {list.title.split("-")[0]}
                        </a>
                      </b>
                      <div>{list.description}</div>
                    </td>
                    <td className={"author-main"}>
                      {list.title.split("-")[1]}
                    </td>
                    <td className={"date-main"}>
                      {list.publishedAt.substr(0, 10)}
                    </td>
                  </tr>
                </table>
              ))}
            </div>
          </>
        )}
      </>
    </BulletinStyleBlock>
  );
}

export default EntertainmentBoard;
