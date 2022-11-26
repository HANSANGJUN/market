import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import styled from "styled-components";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    arrows: false,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="/images/banner1.jpg" alt="" />
        </div>
        <div>
          <img src="/images/banner2.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

const Banner = styled.div`
  position: relative;
  width: 30%;
  height: 500px;
  background: #f2f2f2;
  margin-bottom: 80px;

  .right {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 5%;
    background: transparent;
  }

  .right img {
    background: transparent;
  }

  .left {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    background: transparent;
  }

  .left img {
    background: transparent;
  }
`;
