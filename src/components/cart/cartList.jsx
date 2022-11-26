import React from "react";
import styled from "styled-components";

function CartList() {
  return (
    <CartStyle>
      <div className="cart_product_list">
        <input type="checkbox" />
        <div className="cart_product_wrap">
          <div className="cart_product_image">
            <img src="images/image001.png" alt="product-img" />
          </div>
          <div className="cart_product_info">
            <p className="seller_store">아이돈케어</p>
            <p className="product_name">노트북 파우치</p>
            <p className="price">1000원</p>
            <p className="delivery">택배배송 / 무료배송</p>
          </div>
        </div>
        <div className="cart_product_count">
          <img
            className="minus"
            src="/images/icon-minus-line.svg"
            alt="minus"
          />
          <div className="count">
            <span>5</span>
          </div>
          <img className="plus" src="/images/icon-plus-line.svg" alt="plus" />
        </div>
        <div className="cart_product_price">
          <p className="total_price"></p>
          <button className="btn_submit">주문하기</button>
        </div>
        <div className="product_remove">
          <img src="/images/icon-delete.svg" alt="delete" />
        </div>
      </div>
    </CartStyle>
  );
}

export default CartList;

const CartStyle = styled.div`
  .cart_product_list {
    position: relative;
    max-width: 1280px;
    height: 200px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    margin: 0 auto;
    margin-top: 35px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
  }

  .cart_product_list input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 2px solid #19ce60;
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
  }

  .cart_product_list input[type="checkbox"]:checked {
    background: #19ce60;
    border: none;
  }

  .cart_product_wrap {
    display: flex;
    align-items: center;
  }

  .cart_product_image {
    width: 160px;
    height: 160px;
    border-radius: 10px;
  }

  .cart_product_image img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .cart_product_info {
    width: 150px;
    margin-left: 36px;
  }

  .cart_product_info .seller_store {
    font-size: 12px;
    line-height: 18px;
    color: #767676;
    margin-bottom: 10px;
  }

  .cart_product_info .product_name {
    font-size: 15px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 10px;
  }

  .cart_product_info .price {
    font-size: 15px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 25px;
  }

  .cart_product_info .delivery {
    font-size: 14px;
    line-height: 18px;
    color: #767676;
  }

  .cart_product_count {
    position: relative;
    width: 110px;
    height: 45px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
  }

  .cart_product_count .minus {
    position: absolute;
    width: 10px;
    height: 18px;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .cart_product_count .count {
    position: absolute;
    width: 38px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #c4c4c4;
    border-top: none;
    border-bottom: none;
  }

  .cart_product_count .count span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .cart_product_count .plus {
    position: absolute;
    width: 10px;
    height: 18px;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .cart_product_price {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cart_product_price .total_price {
    font-size: 18px;
    line-height: 23px;
    color: #eb5757;
  }

  .cart_product_price .btn_submit {
    width: 130px;
    height: 40px;
    background: #19ce60;
    border-radius: 5px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
`;
