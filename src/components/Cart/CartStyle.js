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
  }
  
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
    width: 600px;
    background-color: white;
    float: right;
    padding: 40px 10px;
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
  }
  .product {
    display: flex;
    gap: 30px;
    padding: 20px;
  }
  .product .cart-product-image {
    width: 180px;
    height: 150px;
    border-radius: 15px;
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
    font-size: 20px;
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
    position: absolute;
    bottom: 80px;
    color: black;
    left: 720px;
    width: 100%;
    padding: 30px 65px;
  }
  .total {
    display: flex;
    justify-content: space-between;
  }
  .total h3 {
    font-size: 22px;
  }

  .btn-container {
    width: 400px;
  }
  .btn {
    width: 100%;
    max-width: 300px;
    padding: 10px 12px;
    border-radius: 15px;
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
        width: 200px;
        padding: 40px 10px;
        position: relative;
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
        gap: 30px;
        padding: 8px;
      }
      .product .cart-product-image {
        width: 50px;
        height: 50px;
        border-radius: 5px;
      }
      .item-desc .flex {
        width: 100%;
      }
      .flex h5 {
        font-size: 10px;
        width: 70%;
      }
      .flex h4 {
        font-size: 10px;
      }
      .item-desc .bottom {
        margin-top: 10px;
      }
      .quantity-desc {
        padding: 2px;
      }
      .quantity-desc span {
        font-size: 5px;
        padding: 2px 3px;
      }
      .quantity-desc .minus {
      }
      .quantity-desc .num {
        font-size: 5px;
      }
      .quantity-desc .plus {
      }
      .remove-item {
        font-size: 14px;
      }
      .cart-bottom {
        position: absolute;
        bottom: 120px;
        right: 5px;
        left: 450px;
      }
      .total {
      }
      .total h3 {
        font-size: 12px;
      }
    
      .btn-container {
        width: 400px;
      }
      .btn {
        padding: 5px 5px;
        border-radius: 5px;
        border: none;
        font-size: 8px;
      }
      .btn:hover {
        transform: scale(1.1, 1.1);
      }
      .emptyshopcart {
        font-size: 80px;
      }
    
}
    
    
  
  @media screen and (max-width: 750px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 320px) {
    .cart-bottom {
        position: absolute;
        bottom: 1000px
    }
  }
`;
