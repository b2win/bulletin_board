import styled from "styled-components";

export const BulletinStyleBlock = styled.div`
  /* background: #d6ddbe; */
  width: 100%;
  box-sizing: content-box;
  align-items: center;
  justify-content: center;
  display: flex;

  table {
    background: #d6ddbe;
    box-sizing: content-box;
  }

  .thunbnail-head {
    background: #e7e6b0;
    width: 200px;
    height: 30px;
  }
  .title-head {
    background: #e7e6b0;
    width: 1000px;
  }
  .author-head,
  .date-head {
    background: #e7e6b0;
    width: 200px;
  }

  .message {
    height: 2rem;
    align-items: center;
  }
  .thunbnail-main {
    width: 200px;
    padding: 0;
    border-spacing: 0;
    box-sizing: content-box;
  }

  .thunbnail-main img {
    width: 200px;
    height: 100px;
    box-sizing: content-box;
    overflow-y: hidden;
  }

  .title-main {
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    width: 1000px;
    height: 50px;
    text-align: center;
  }
  .title-main div {
    height: 40px;
    width: 800px;
    overflow-y: hidden;
    justify-content: center;
    margin-left: 100px;
  }
  .author-main,
  .date-main {
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    width: 200px;
    text-align: center;
  }
`;
