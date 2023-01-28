import styled from "@emotion/styled";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 900px;
  position: relative;
  border-bottom: 1px solid #e8e7ec;
  display: flex;
  justify-content: space-evenly;
  color: white;
  background-color: #1d1d1e;

  & > * {
    width: 25%;
  }

  .community,
  .about {
    flex-wrap: wrap;
    border-radius: 5px;
    list-style: none;
  }

  .logo {
    width: clamp(10rem, 20vw, 14.375rem);
    margin-bottom: 4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .socials {
    display: flex;
    justify-content: space-evenly;
  }

  .about h2 {
    margin-right: 25px;
  }
  .copyright {
    color: #c7c7cd;
    display: flex;
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    margin-top: 2.5rem;
    > span {
      margin-left: 2.6rem;
    }
  }
  .community,
  .about {
    h2 {
      text-align: end;
      cursor: mouse;
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      margin-bottom: 1rem;
    }
    ul li {
      text-align: start;
      color: #c7c7cd;
      margin-bottom: 10px;
      font-size: clamp(0.8rem, 1vw, 1rem);
      list-style: none;
      margin-right: 30px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 900px) {
    > * {
      width: 100%;
      // margin-right: 10px;
    }
    .reach_out {
      width: 40%;
    }

    .reach_out,
    .community {
      margin-bottom: 2.5rem;
    }
    .community,
    .about {
      h2 {
        font-size: 10px;
      }
      ul li {
        font-size: 10px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .logos {
      font-size: 15px;
    }
    .copyright {
      font-size: 12px;
      margin-top: 2.5rem;
      > span {
        // font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 750px) {
    // width: 75%;
  }
  @media screen and (max-width: 600px) {
    // padding: 15px 0 15px 10%;
    // width: 75%;
  }
  @media screen and (max-width: 320px) {
    .community,
    .about {
      h2 {
        font-size: 10px;
      }
      ul li {
        font-size: 10px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .logos {
      font-size: 10px;
    }
    .logo {
      width: 35px;
      // height: 25px;
      margin-bottom: 4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .copyright {
      font-size: 8px;
      margin-top: 2.5rem;
      > span {
        // font-size: 12px;
      }
    }
  }
`;
