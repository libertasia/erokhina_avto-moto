import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {Rating, RatingLevel, TabTypes} from '../../const';
import {getActiveTab, getAllReviews} from '../../store/selectors';
import {ActionCreator} from '../../store/action';
import map1xpng from '../../img/map@1x.png';
import map2xpng from '../../img/map@2x.png';
import map1xwebp from '../../img/map@1x.webp';
import map2xwebp from '../../img/map@2x.webp';
import pin from '../../img/pin.svg';
import AddReviewForm from './add-review-form';

const ESC_KEY_CODE = 27;

const KEY_DOWN = `keydown`;

const MAP_COORDINATES = [59.968137, 30.316272];

const TabDetails = [
  {
    type: TabTypes.CHARACTERISTICS,
    title: `Характеристики`
  },
  {
    type: TabTypes.REVIEWS,
    title: `Отзывы`
  },
  {
    type: TabTypes.CONTACTS,
    title: `Контакты`
  },
];

const getReviewText = (review) => {
  if (review.rating >= Rating.THREE) {
    return RatingLevel.GOOD;
  }

  return RatingLevel.BAD;
};

const Tabs = (props) => {
  const {activeTab, setActiveTab, reviews} = props;

  const [isReviewFormVisible, setReviewFormVisible] = useState(false);

  let tabContent = null;

  const handleTabClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.currentTarget.dataset.id);
  };

  const handleReviewBtnClick = () => {
    setReviewFormVisible(true);
  };

  const hideReviewForm = () => {
    setReviewFormVisible(false);
  };

  const handleEscPress = (evt) => {
    if (evt.keyCode === ESC_KEY_CODE) {
      setReviewFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener(KEY_DOWN, handleEscPress);

    return () => {
      document.removeEventListener(KEY_DOWN, handleEscPress);
    };
  }, []);

  switch (activeTab) {
    case TabTypes.CHARACTERISTICS:
      tabContent = (
        <div className="avto-nav__text">
          <ul className="auto-nav__details-list">
            <li className="auto-nav__details-item">
              <span className="auto-nav__details-name">Трансмиссия</span>
              <span className="auto-nav__details-value">Роботизированная</span>
            </li>
            <li className="auto-nav__details-item">
              <span className="auto-nav__details-name">Мощность двигателя, л.с.</span>
              <span className="auto-nav__details-value">249</span>
            </li>
            <li className="auto-nav__details-item">
              <span className="auto-nav__details-name">Тип двигателя</span>
              <span className="auto-nav__details-value">Бензиновый</span>
            </li>
            <li className="auto-nav__details-item">
              <span className="auto-nav__details-name">Привод</span>
              <span className="auto-nav__details-value">Полный</span>
            </li>
            <li className="auto-nav__details-item">
              <span className="auto-nav__details-name">Объем двигателя, л</span>
              <span className="auto-nav__details-value">2.4</span>
            </li>
            <li className="auto-nav__details-item">
              <span className="auto-nav__details-name">Макс. крутящий момент</span>
              <span className="auto-nav__details-value">370/4500</span>
            </li>
            <li className="auto-nav__details-item">
              <span className="auto-nav__details-name">Количество цилиндров</span>
              <span className="auto-nav__details-value">4</span>
            </li>
          </ul>
        </div>
      );
      break;
    case TabTypes.REVIEWS:
      tabContent = (
        <div className="auto-nav__reviews reviews">
          <button className="reviews__btn" type="button" onClick={handleReviewBtnClick}>Оставить отзыв</button>
          <AddReviewForm isVisible={isReviewFormVisible} handleClose={hideReviewForm}/>
          <ul className="reviews__list">
            {reviews.map(
                (review, index) => (
                  <li key={`${review.name}-${index}`} className="review">
                    <cite className="review__author">{review.name}</cite>
                    <div className="review__text">
                      <p className="review__advantages">Достоинства</p>
                      <q className="review__advantages-quote">{review.pros}</q>
                    </div>
                    <div className="review__text">
                      <p className="review__disadvantages">Недостатки</p>
                      <q className="review__disadvantages-quote">{review.cons}</q>
                    </div>
                    <blockquote className="review__quote">
                      <p className="review__comment">Комментарий</p>
                      <p className="review__comment-text">{review.comment}</p>
                      <div className="review__rating">
                        <span className="review__star review__star--bright"></span>
                        <span className="review__star review__star--bright"></span>
                        <span className="review__star review__star--bright"></span>
                        <span className="review__star"></span>
                        <span className="review__star"></span>
                        <p className="review__rating-text">{getReviewText(review)}</p>
                      </div>
                      <footer className="review__details">
                        <time className="review__date" dateTime="2021-06-17">1 минуту назад</time>
                        <button className="reviews__btn-answer" type="button">Ответить</button>
                      </footer>
                    </blockquote>
                  </li>
                ))
            }
          </ul>
        </div>
      );
      break;
    case TabTypes.CONTACTS:
      tabContent = (
        <div className="auto-nav__contacts">
          <ul className="auto-nav__contacts-details">
            <li className="auto-nav__contacts-item">
              <p className="auto-nav__contacts-title">Адрес</p>
              <p className="auto-nav__contacts-text">Санкт-Петербург,<br />набережная реки Карповки, дом 5</p>
            </li>
            <li className="auto-nav__contacts-item">
              <p className="auto-nav__contacts-title">Режим работы</p>
              <p className="auto-nav__contacts-text">Ежедневно, с 10:00 до 21:00</p>
            </li>
            <li className="auto-nav__contacts-item">
              <p className="auto-nav__contacts-title">Телефон</p>
              <p className="auto-nav__contacts-text"><a className="auto-nav__contacts-link" href="tel:+78003335599">8 (800) 333-55-99</a></p>
            </li>
            <li className="auto-nav__contacts-item">
              <p className="auto-nav__contacts-title">E-mail</p>
              <p className="auto-nav__contacts-text"><a className="auto-nav__contacts-link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a></p>
            </li>
          </ul>
          <div className="auto-nav__contacts-map">
            <YMaps>
              <Map className="auto-nav__map-yandex"
                defaultState={{
                  center: MAP_COORDINATES,
                  zoom: 15
                }}
                width={431}
                height={271}>
                <Placemark
                  geometry={MAP_COORDINATES}
                  options={{
                    iconLayout: `default#image`,
                    iconImageHref: pin
                  }}
                />
              </Map>
              <picture>
                <source type="image/webp" media="(min-width: 1024px)" srcSet={`${map1xwebp} 1x, ${map2xwebp} 2x`} />
                <img className="auto-nav__map-image" src={map1xpng} srcSet={`${map2xpng} 2x`} width={431} height={271} alt="Карта нахождения магазина в г. Санкт-Петербург" />
              </picture>
            </YMaps>
          </div>
        </div>
      );
  }

  return (
    <div className="auto-card__desc auto-nav">
      <ul className="auto-nav__list">
        {
          TabDetails.map((tab) =>
            (
              <li key={tab.type} data-id={tab.type} onClick={handleTabClick} className={`auto-nav__item ${tab.type === activeTab ? `auto-nav__item--active` : ``}`}>
                <a href="#" className={`auto-nav__link ${tab.type === activeTab ? `auto-nav__link--active` : ``}`}>{tab.title}</a>
              </li>
            ))
        }
      </ul>
      {tabContent}
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        pros: PropTypes.string,
        cons: PropTypes.string,
        rating: PropTypes.number,
        comment: PropTypes.string.isRequired,
      })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  activeTab: getActiveTab(state),
  reviews: getAllReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveTab(tabId) {
    dispatch(ActionCreator.setActiveTab(tabId));
  },
});

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
