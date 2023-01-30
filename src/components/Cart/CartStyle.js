import styled from "@emotion/styled";

export const Container = styled.div`
  .cart-wrapper {
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    /* will-change: transform; */
    transition: all 1s ease-in-out;
  }
  .cart-container {
    height: 100vh;
    width: 45%;
    background-color: white;
    float: right;
    padding: 30px 5px;
    position: relative;
  }

  .cart-heading {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    gap: 2px;
    margin-left: 10px;
    border: none;
    background-color: transparent;
  }
  .cart-heading .heading {
    margin-left: 10px;
  }
  .cart-num-items {
    margin-left: 10px;
    color: #f02d34;
  }
  .empty-cart {
    margin: 40px;
    text-align: center;
  }
  .empty-cart h3 {
    font-weight: 600;
    font-size: 20px;
  }

  ///////////////////

  .product-container {
    margin-top: 15px;
    overflow: auto;
    max-height: 70vh;
    padding: 20px 10px;
    // border: 3px solid green;
  }
  .product {
    display: flex;
    gap: 30px;
    padding: 50px;
  }
  .product .cart-product-image {
    width: 180px;
    height: 150px;
    border-radius: 5px;
    background-color: #ebebeb;
  }
  .item-desc .flex {
    display: flex;
    justify-content: space-between;
    width: 350px;
    color: #324d67;
  }
  .flex h5 {
    font-size: 15px;
    width: 70%;
  }
  .flex h4 {
    font-size: 15px;
  }
  .item-desc .bottom {
    margin-top: 60px;
  }
  .quantity-desc {
    border: 1px solid gray;
    padding: 6px;
  }
  .quantity-desc span {
    font-size: 16px;
    padding: 4px 8px;
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
  .remove-item {
    font-size: 24px;
    color: #f02d34;
    cursor: pointer;
    background: transparent;
    border: none;
  }
  .cart-bottom {
    color: #324d67;
    width: 70%;
    padding: 20px 65px;
    margin-top: 95px;
    // border: 3px solid red;
  }
  .total {
    display: flex;
    justify-content: space-between;
  }
  .total h3 {
    font-size: 22px;
  }

  .btn-container {
    // width: 500px;
  }
  .btn {
    width: 100%;
    max-width: 500px;
    padding: 10px 12px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    margin-top: 5px;
    text-transform: uppercase;
    background-color: #f02d34;
    color: #fff;
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
  }
  .btn:hover {
    transform: scale(1.1, 1.1);
  }
  .emptyshopcart {
    font-size: 150px;
  }

  @media screen and (max-width: 815px) {
    .cart-container {
      height: 100vh;
      width: 70%;
    }

    .cart-heading {
      font-size: 12px;
      margin-left: 3px;
    }
    .cart-heading .heading {
      margin-left: 2px;
    }
    .cart-num-items {
      margin-left: 2px;
    }
    .empty-cart {
      margin: 5px;
    }
    .empty-cart h3 {
      font-weight: 600;
      font-size: 5px;
    }

    ///////////////////

    .product-container {
      padding: 10px 5px;
    }
    .product {
      gap: 10px;
      padding: 8px;
    }
    .product .cart-product-image {
      width: 100%;
      height: 55px;
      border-radius: 5px;
    }
    .item-desc .flex {
      width: 100%;
    }
    .flex h5,
    .flex h4 {
      font-size: 10px;
      width: 50%;
    }
    .item-desc .bottom {
      margin-top: 10px;
    }
    .quantity-desc {
      display: flex;
      align-items: center;
    }
    .quantity-desc .num {
      font-size: 7px;
    }
    .remove-item {
      font-size: 14px;
    }
    .cart-bottom {
      height: 10;
    }
    .total {
    }
    .total h3 {
      font-size: 12px;
    }

    .btn-container {
    }
    .btn {
      font-size: 10px;
    }
    .emptyshopcart {
      font-size: 80px;
    }
  }

  @media screen and (max-width: 750px) {
  }
  @media screen and (max-width: 600px) {
    .cart-bottom {
      margin-top: 325px;
    }
  }
  @media screen and (max-width: 320px) {
    .product {
      gap: 5px;
      padding: 5px;
    }
    .cart-bottom {
      margin-top: 95px;
      padding: 20px 45px;
    }
    .btn {
      font-size: 9px;
    }
  }
`;
