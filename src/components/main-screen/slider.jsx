import React, {useState, useEffect} from 'react';

import desktop1Slide1xjpg from '../../img/desktop-slide-1@1x.jpg';
import desktop1Slide2xjpg from '../../img/desktop-slide-1@2x.jpg';
import desktop1Slide1xwebp from '../../img/desktop-slide-1@1x.webp';
import desktop1Slide2xwebp from '../../img/desktop-slide-1@2x.webp';

import desktop2Slide1xjpg from '../../img/desktop-slide-2@1x.jpg';
import desktop2Slide2xjpg from '../../img/desktop-slide-2@2x.jpg';
import desktop2Slide1xwebp from '../../img/desktop-slide-2@1x.webp';
import desktop2Slide2xwebp from '../../img/desktop-slide-2@2x.webp';

import desktop3Slide1xjpg from '../../img/desktop-slide-3@1x.jpg';
import desktop3Slide2xjpg from '../../img/desktop-slide-3@2x.jpg';
import desktop3Slide1xwebp from '../../img/desktop-slide-3@1x.webp';
import desktop3Slide2xwebp from '../../img/desktop-slide-3@2x.webp';

import card1Small1xjpg from '../../img/card-1-small@1x.jpg';
import card1Small2xjpg from '../../img/card-1-small@2x.jpg';
import card1Small1xwebp from '../../img/card-1-small@1x.webp';
import card1Small2xwebp from '../../img/card-1-small@2x.webp';

import card2Small1xjpg from '../../img/card-2-small@1x.jpg';
import card2Small2xjpg from '../../img/card-2-small@2x.jpg';
import card2Small1xwebp from '../../img/card-2-small@1x.webp';
import card2Small2xwebp from '../../img/card-2-small@2x.webp';

import card3Small1xjpg from '../../img/card-3-small@1x.jpg';
import card3Small2xjpg from '../../img/card-3-small@2x.jpg';
import card3Small1xwebp from '../../img/card-3-small@1x.webp';
import card3Small2xwebp from '../../img/card-3-small@2x.webp';

const galleryImages = [
  {
    webp1x: desktop1Slide1xwebp,
    webp2x: desktop1Slide2xwebp,
    jpg1x: desktop1Slide1xjpg,
    jpg2x: desktop1Slide2xjpg,
    alt: `Слайд 1`,
  },
  {
    webp1x: desktop2Slide1xwebp,
    webp2x: desktop2Slide2xwebp,
    jpg1x: desktop2Slide1xjpg,
    jpg2x: desktop2Slide2xjpg,
    alt: `Слайд 2`,
  },
  {
    webp1x: desktop3Slide1xwebp,
    webp2x: desktop3Slide2xwebp,
    jpg1x: desktop3Slide1xjpg,
    jpg2x: desktop3Slide2xjpg,
    alt: `Слайд 3`,
  }
];

const Slider = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  const onNextBtnClick = () => {
    if (activeIndex === galleryImages.length - 1) {
      return;
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const onPrevBtnClick = () => {
    if (activeIndex === 0) {
      return;
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    setActiveImage(galleryImages[activeIndex]);
  }, [activeIndex]);

  return (
    <React.Fragment>
      <picture>
        <source type="image/webp" media="(min-width: 1024px)" srcSet={`${activeImage.webp1x} 1x, ${activeImage.webp2x} 2x`} />
        <img src={activeImage.jpg1x} srcSet={`${activeImage.jpg2x} 2x`} width={600} height={375} alt={activeImage.alt} />
      </picture>

      <div className="slider__navigation">
        <button className="slider__btn slider__btn--previous" type="button" onClick={onPrevBtnClick} disabled={activeIndex === 0}>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="25.5" fill="white" stroke="#D7D9DF"/>
            <path className="slider__btn-arrow" d="M17.0043 26.1719L22.9184 20.3686M17.0043 26.1719L22.6929 31.9692M17.0043 26.1719L35.9813 26.3513" stroke="#48494D"/>
          </svg>
        </button>

        <ul className="slider__preview-img-list">
          <li className="slider__preview-img-item">
            <picture>
              <source type="image/webp" media="(min-width: 1024px)" srcSet={`${card1Small1xwebp} 1x, ${card1Small2xwebp} 2x`} />
              <img className="slider__preview-img" src={card1Small1xjpg} srcSet={`${card1Small2xjpg} 2x`} width={128} height={80} alt="Слайд 1 мини" />
            </picture>
          </li>
          <li className="slider__preview-img-item">
            <picture>
              <source type="image/webp" media="(min-width: 1024px)" srcSet={`${card2Small1xwebp} 1x, ${card2Small2xwebp} 2x`} />
              <img className="slider__preview-img" src={card2Small1xjpg} srcSet={`${card2Small2xjpg} 2x`} width={128} height={80} alt="Слайд 2 мини" />
            </picture>
          </li>
          <li className="slider__preview-img-item">
            <picture>
              <source type="image/webp" media="(min-width: 1024px)" srcSet={`${card3Small1xwebp} 1x, ${card3Small2xwebp} 2x`} />
              <img className="slider__preview-img" src={card3Small1xjpg} srcSet={`${card3Small2xjpg} 2x`} width={128} height={80} alt="Слайд 3 мини" />
            </picture>
          </li>
        </ul>

        <button className="slider__btn slider__btn--next" type="button" onClick={onNextBtnClick} disabled={activeIndex === galleryImages.length - 1}>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.500408 26C0.500408 40.0834 11.9143 51.5 25.9939 51.5C40.0734 51.5 51.4873 40.0834 51.4873 26C51.4873 11.9166 40.0734 0.5 25.9939 0.5C11.9143 0.5 0.500408 11.9166 0.500408 26Z" fill="white" stroke="#D7D9DF"/>
            <path className="slider__btn-arrow" d="M34.9873 26.1719L29.0747 20.3686M34.9873 26.1719L29.3001 31.9692M34.9873 26.1719L16.0151 26.3513" stroke="#48494D"/>
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Slider;
