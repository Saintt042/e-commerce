import styled from "@emotion/styled";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 900px;
  border-bottom: 1px solid #e8e7ec;
  // display: flex;
  // justify-content: space-between;

  & > * {
    align-items: center;
  }
  .product-detail-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 30px;
    margin-top: 60px;
    color: #324d67;
  }

  .product-detail-image {
    align-content: center;
    border-radius: 15px;
    background-color: #ebebeb;
    width: 400px;
    height: 400px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  .product-detail-image:hover {
    background-color: #f02d34;
  }
  .small-images-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  .small-image {
    border-radius: 8px;
    background-color: #ebebeb;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .selected-image {
    background-color: #f02d34;
  }
  .reviews {
    color: #f02d34;
    margin-top: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .product-detail-desc h4 {
    margin-top: 10px;
  }
  .product-detail-desc p {
    margin-top: 10px;
  }
  .reviews p {
    color: #324d67;
    margin-top: 0px;
  }
  .product-detail-desc .price {
    font-weight: 700;
    font-size: 26px;
    margin-top: 30px;
    color: #f02d34;
  }
  .price .old-price,
  .product-price .old-price,
  .price .old-price {
    color: gray;
    text-decoration: line-through;
  }
  .product-detail-desc .quantity {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    align-items: center;
  }
  .product-detail-desc .buttons {
    display: flex;
    gap: 30px;
  }
  .buttons .add-to-cart {
    padding: 10px 20px;
    border: 1px solid #f02d34;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    background-color: white;
    color: #f02d34;
    cursor: pointer;
    width: 200px;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .buttons .add-to-cart:hover {
    transform: scale(1.1, 1.1);
  }
  .buttons .buy-now {
    width: 200px;
    padding: 10px 20px;
    background-color: #f02d34;
    color: white;
    border: none;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .buttons .buy-now:hover {
    transform: scale(1.1, 1.1);
  }

  .quantity-desc {
    border: 1px solid gray;
    padding: 6px;
  }
  .quantity-desc span {
    font-size: 16px;
    padding: 6px 12px;
    cursor: pointer;
  }
  .quantity-desc .minus {
    border-right: 1px solid gray;
    color: #f02d34;
  }
  .quantity-desc .num {
    border-right: 1px solid gray;
    font-size: 20px;
  }
  .quantity-desc .plus {
    color: rgb(49, 168, 49);
  }

  .maylike-products-wrapper {
    margin-top: 120px;
  }
  .maylike-products-wrapper h2 {
    text-align: center;
    margin: 50px;
    color: #324d67;

    font-size: 28px;
  }
  .maylike-products-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
  .max-qty {
    font-weight: 500;
    color: #f02d34;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 900px) {

    h1 {
      font-size: 20px;
    }
    .product-detail-container {
      flex-wrap: wrap;
      display: flex;
    }
    .product-detail-container .product-detail-image {
      width: 300px;
      height: 300px;
    }
    .quantity-desc {
      // border: 1px solid gray;
      padding: 2px;
    }
    .buttons .add-to-cart,
    .buttons .buy-now {
      width: 100%;
    }
    .quantity-desc span {
      font-size: 10px;
    }
    .quantity-desc .num {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 750px) {
    // width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    .product-detail-container .product-detail-image {
        width: 250px;
        height: 250px;
      }
    h1 {
        font-size: 15px;
      }
    .quantity-desc {
        padding: 0;
      }
    .quantity-desc span {
        font-size: 5px;
      }
      .quantity-desc .num {
        font-size: 10px;
      }
      .quantity h3 {
        font-size: 12px;
      }
      .buttons .add-to-cart,
    .buttons .buy-now {
      width: 100%;
      font-size: 9px;
    }

  }
`;
