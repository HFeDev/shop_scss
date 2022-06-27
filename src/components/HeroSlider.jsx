import { Link } from "react-router-dom";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";

import Button from "./Button";

const HeroSlider = ({ data, control, auto, timeOut }) => {
  const [activeSlider, setActiveSlider] = useState(0);

  const time = timeOut ? timeOut : 3000;

  const nextSlide = useCallback(() => {
    const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1;
    setActiveSlider(index);
  }, [activeSlider, data]);

  const prevSlide = () => {
    const index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1;
    setActiveSlider(index);
  };

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, time);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, auto, time]);

  return (
    <div className="hero-slider">
      {data?.map((item, ind) => (
        <HeroItem key={ind} item={item} active={activeSlider === ind} />
      ))}
      {control && (
        <div className="hero-slider__control">
          <div className="hero-slider__control__item left" onClick={prevSlide}>
            <BsArrowLeftCircle />
          </div>
          <div className="hero-slider__control__item index">
            {activeSlider + 1} / {data.length}
          </div>
          <div className="hero-slider__control__item right" onClick={nextSlide}>
            <BsArrowRightCircle />
          </div>
        </div>
      )}
    </div>
  );
};

const HeroItem = ({ item, active }) => {
  return (
    <div className={`hero-slider__item ${active ? "active" : ""}`}>
      {/* infor */}
      <div className="hero-slider__item__infor">
        <div className={`hero-slider__item__infor__title color-${item.color}`}>
          <span>{item.title}</span>
        </div>
        <div className="hero-slider__item__infor__description">
          <span>{item.description}</span>
        </div>
        <div className="hero-slider__item__infor__btn">
          <Link to={item.path}>
            <Button
              background={item.color}
              icon={true}
              animate={true}
              handeClick
              size
            >
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </div>

      {/* img */}
      <div className="hero-slider__item__img">
        <div className={`shape bg-${item.color}`}></div>
        <img src={item.img} alt="" />
      </div>
    </div>
  );
};

export default HeroSlider;
