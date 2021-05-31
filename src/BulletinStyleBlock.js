import styled from "styled-components";

export const BulletinStyleBlock = styled.div`
  background: #d6ddbe;
  width: 1500px;
  margin: 2rem;

  .thunbnail-head {
    background: #e7e6b0;
    width: 200px;
    box-sizing: border-box;
  }
  .title-head {
    background: #e7e6b0;
    width: 1000px;
    box-sizing: border-box;
  }
  .author-head,
  .date-head {
    background: #e7e6b0;
    width: 200px;
    box-sizing: border-box;
  }

  .message {
    height: 2rem;
    align-items: center;
    box-sizing: border-box;
  }
  .thunbnail-main {
    width: 200px;
  }
  .title-main {
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    width: 1000px;
    box-sizing: border-box;
    text-align: center;
  }
  .author-main,
  .date-main {
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    width: 200px;
    box-sizing: border-box;
    text-align: center;
  }
`;
