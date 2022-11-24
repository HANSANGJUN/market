import React from "react";

export default function cartHeader() {
  return (
    <div>
      <div className="header">
        <h1>장바구니</h1>
      </div>
      <div className="cartTitleWrap">
        <div className="tab_title">
          <input type="checkbox" />
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>

          <p>전체선택</p>
        </div>
      </div>
    </div>
  );
}
