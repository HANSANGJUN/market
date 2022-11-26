import React from "react";
import styled from "styled-components";

function CartHeader() {
  return (
    <CartStyle>
      <div className="cartTitleWrap">
        <div className="tab_title">
          <input type="checkbox" />
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>

          <p>전체선택</p>
        </div>
      </div>
    </CartStyle>
  );
}

export default CartHeader;

const CartStyle = styled.div`
  .tab_title {
    max-width: 1280px;
    height: 60px;
    border-radius: 10px;
    background: #f2f2f2;
    margin: 0 auto;
    margin-top: 52px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
  }

  .tab_title span {
    background: #f2f2f2;
  }

  .tab_title input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 2px solid #19ce60;
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
  }

  .tab_title input[type="checkbox"]:checked {
    background: #19ce60;
    border: none;
  }

  .tab_title p {
    display: none;
    background: #f2f2f2;
    font-size: 18px;
    color: #767676;
  }
`;
