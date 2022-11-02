import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export const Main = ({ products, setProducts, convertPrice }) => {
  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
    });
  }, []);

  return (
    <>
      {/* <EventBanner /> */}
      <Filter>
        <p>최신순</p>
        <p>낮은 가격</p>
        <p>높은 가격</p>
      </Filter>
      <Flex_wrap>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              convertPrice={convertPrice}
            />
          );
        })}
      </Flex_wrap>
    </>
  );
};

const Filter = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  justify-content: flex-end;

  p:not(:last-child)::after {
    content: "|";
    padding: 10px;
  }

  p {
    cursor: pointer;
  }
`;

const Flex_wrap = styled.div`
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 70px 0px;
  margin: 0 auto;
  margin-top: 35px;
  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 360px) {
    p {
      font-size: 12px;
    }
  }
`;
