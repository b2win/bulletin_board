import React, { useEffect, useState } from "react";
import axios from "axios";
import { BulletinStyleBlock } from "./BulletinStyleBlock";
import loadingImage from "./loadingImage.gif";
import Pagination from "./Pagination";
import PaginationB2win from "./PagenationB2win";

function Abcd({ category }) {
  const [bulletin, setBulletin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cb7f2c87059e431aac872c465d1287bd`
        );
        console.log(category);
        setBulletin(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <BulletinStyleBlock>
        <img src={loadingImage} alt="loading img" />
      </BulletinStyleBlock>
    );
  }
  if (!bulletin) {
    return null;
  }

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  console.log(indexOfFirst);
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    console.log(currentPosts);
    return currentPosts;
  }

  const onClickPrev = () => {
    console.log(currentPage);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickNext = () => {
    if (indexOfLast > 0) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <BulletinStyleBlock>
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
              {/* {currentPosts(bulletin.articles).map((list, index) => ( */}
              {bulletin.articles.map((list, index) => (
                <table className={"message"}>
                  <tr>
                    <td className={"thunbnail-main"}>
                      {index + 1}
                      <a
                        href={list.url}
                        target={"_blank"}
                        c
                        rel="noreferrer noopener"
                      >
                        <img src={list.urlToImage} alt="Thumbnail Img" />
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
                      <br />
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
      </BulletinStyleBlock>
      <button onClick={onClickPrev}>Prev</button>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={bulletin.articles.length}
        paginate={setCurrentPage}
      ></Pagination>
      <button onClick={onClickNext}>Next</button>
      <PaginationB2win />
    </>
  );
}

export default Abcd;
