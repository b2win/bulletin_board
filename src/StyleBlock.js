import styled from "styled-components";

export const StyleBlock = styled.div`
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
