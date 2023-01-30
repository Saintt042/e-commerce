import styled from "@emotion/styled";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 900px;
  position: relative;
  border-bottom: 1px solid #e8e7ec;
  display: flex;
  // justify-content: space-between;

  .footer-banner-container {
    padding: 100px 40px;
    background-color: #f02d34;
    border-radius: 5px;
    position: relative;
    height: 500px;
    line-height: 1;
    color: white;
    width: 100%;
    margin-top: 120px;
  }
  .banner-desc {
    display: flex;
    justify-content: space-between;
  }
  .banner-desc button {
    border-radius: 5px;
    padding: 10px 16px;
    background-color: white;
    color: red;
    border: none;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
  .banner-desc .left h3 {
    font-weight: 900;
    font-size: 80px;
    margin-left: 5px;
  }
  .banner-desc .left p {
    margin: 18px;
  }
  .footer-banner-image {
    position: absolute;
    top: 10%;
    left: 25%;
  }
  .banner-desc .right {
    line-height: 1.4;
  }
  .banner-desc .right h3 {
    font-weight: 800;
    font-size: 60px;
  }
  .banner-desc .right p {
    font-size: 18px;
  }
  .banner-desc .right .company-desc {
    font-size: 14px;
    font-weight: 300;
  }

  @media screen and (max-width: 815px) {
    .footer-banner-container {
      height: 360px;
      margin-top: 80px;
    }
    .footer-banner-image {
      width: 57%;
      left: 30%;
      top: 2%;
      height: 56%;
      opacity: 0.5;
    }
    .banner-desc .left h3 {
      font-weight: 900;
      font-size: 30px;
      margin-left: 5px;
    }
    .banner-desc .left p {
      margin: 18px;
    }
    .banner-desc .right h3 {
      font-size: 35px;
    }
    .banner-desc .right p {
      font-size: 18px;
    }
    .banner-desc .right .company-desc {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 750px) {
  }
  @media screen and (max-width: 600px) {
    .footer-banner-image {
    }
    .banner-desc button {
      font-size: 15px;
    }
    .banner-desc .left h3 {
      font-size: 20px;
      margin-left: -20px;
    }
   
    .banner-desc .right h3 {
      font-size: 25px;
    }
    .banner-desc .right p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 320px) {
    .footer-banner-image {
    }
    .banner-desc .left h3 {
      font-size: 25px;
      margin-left: -20px;
    }
    .banner-desc .left p {
      margin: 18px;
    }
    .banner-desc .right h3 {
      font-size: 30px;
    }
    .banner-desc .right p {
      font-size: 15px;
    }
    .banner-desc .right .company-desc {
      font-size: 14px;
    }
  }
`;
