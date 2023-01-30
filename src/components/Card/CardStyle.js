import styled from "@emotion/styled";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 900px;
  position: relative;
  border-bottom: 1px solid #e8e7ec;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 15rem;
  border: 1px solid #d7d7d7;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
  }
  figure {
    width: 100%;
    height: clamp(13rem, 20vw, 16rem);
    margin-bottom: 10px;
    // border: 1px solid red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    // border: 1px solid red;
    > * {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      margin-bottom: 7px;
      align-items: center;
    }
    p {
      font-size: clamp(0.6rem, 1.5vw, 0.75rem);
      text-align: center;
    }
  }

  & > * {
  }

  @media screen and (max-width: 815px) {
  }
  @media screen and (max-width: 750px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 320px) {
  }
`;
