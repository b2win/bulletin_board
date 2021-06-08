import React from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  width: 30px;
  display: block;
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

/* Pagination links */
const Pagination = styled.div`
  list-style: none;
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  &:active {
    background-color: dodgerblue;
    color: white;
  }
  &:hover:not(.active) {
    background-color: #ddd;
  }
`;

const PaginationB2win = ({ postsPerPage, totalPosts, paginate }) => {
  console.log(totalPosts);
  console.log(paginate);
  console.log(postsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      <button href="#">&laquo;</button>
      <li href="#">1</li>
      <li class="active" href="#">
        2
      </li>
      <li href="#">3</li>
      <li href="#">4</li>
      <li href="#">5</li>
      <li href="#">6</li>
      <li href="#">&raquo;</li>
    </Pagination>
  );
};

export default PaginationB2win;
