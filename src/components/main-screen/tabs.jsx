import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import dayjs from 'dayjs';
// import {FilmShape, ReviewsShape} from '../../../shapes';
import {TabTypes} from '../../const';
// import {Rating, RatingLevel, TabTypes} from '../../const';
// import {getFilm, getReviews, getActiveTab} from '../../../store/selectors';
import {getActiveTab} from '../../store/selectors';
import {ActionCreator} from '../../store/action';
import map1xpng from '../../img/map@1x.png';
import map2xpng from '../../img/map@2x.png';
import map1xwebp from '../../img/map@1x.webp';
import map2xwebp from '../../img/map@2x.webp';

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

const Tabs = (props) => {
  const {activeTab, setActiveTab} = props;
  // const {film, reviews, activeTab, setActiveTab} = props;

  // const filmDurarion = getDuration(film);

  let tabContent = null;

  const handleTabClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.currentTarget.dataset.id);
  };

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
          <button className="reviews__btn" type="button">Оставить отзыв</button>
          <ul className="reviews__list">
            <li className="review">
              <cite className="review__author">Борис Иванов</cite>
              <div className="review__text">
                <p className="review__advantages">Достоинства</p>
                <q className="review__advantages-quote">мощность, внешний вид</q>
              </div>
              <div className="review__text">
                <p className="review__disadvantages">Недостатки</p>
                <q className="review__disadvantages-quote">Слабые тормозные колодки (пришлось заменить)</q>
              </div>
              <blockquote className="review__quote">
                <p className="review__comment">Комментарий</p>
                <p className="review__comment-text">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
                <div className="review__rating">Советует</div>
                <footer className="review__details">
                  <time className="review__date" dateTime="2021-06-17">1 минуту назад</time>
                  <button className="reviews__btn-answer" type="button">Ответить</button>
                </footer>
              </blockquote>
            </li>
            <li className="review">
              <cite className="review__author">Марсель Исмагилов</cite>
              <div className="review__text">
                <p className="review__advantages">Достоинства</p>
                <q className="review__advantages-quote">Cтиль, комфорт, управляемость</q>
              </div>
              <div className="review__text">
                <p className="review__disadvantages">Недостатки</p>
                <q className="review__disadvantages-quote"> Дорогой ремонт и обслуживание</q>
              </div>
              <blockquote className="review__quote">
                <p className="review__comment">Комментарий</p>
                <p className="review__comment-text">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</p>
                <div className="review__rating">Советует</div>
                <footer className="review__details">
                  <time className="review__date" dateTime="2021-06-17">1 минуту назад</time>
                  <button className="reviews__btn-answer" type="button">Ответить</button>
                </footer>
              </blockquote>
            </li>
          </ul>
        </div>
      );
      break;
    case TabTypes.CONTACTS:
      tabContent = (
        <div className="auto-nav__contacts">
          <div className="auto-nav__contacts-details">
            <div className="auto-nav__contacts-title">Адрес
              <p className="auto-nav__contacts-text">Санкт-Петербург,<br />набережная реки Карповки, дом 5</p>
            </div>
            <div className="auto-nav__contacts-title">Режим работы
              <p className="auto-nav__contacts-text">Ежедневно, с 10:00 до 21:00</p>
            </div>
            <div className="auto-nav__contacts-title">Телефон
              <p className="auto-nav__contacts-text"><a className="auto-nav__contacts-link" href="tel:+78003335599">8 (800) 333-55-99</a></p>
            </div>
            <div className="auto-nav__contacts-title">E-mail
              <p className="auto-nav__contacts-text"><a className="auto-nav__contacts-link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a></p>
            </div>
          </div>
          <div className="auto-nav__contacts-map">
            <picture>
              <source type="image/webp" media="(min-width: 1024px)" srcSet={`${map1xwebp} 1x, ${map2xwebp} 2x`} />
              <img className="auto-nav__map-image" src={map1xpng} srcSet={`${map2xpng} 2x`} width={431} height={271} alt="Карта нахождения магазина в г. Санкт-Петербург" />
            </picture>
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
        {/* <li className="auto-nav__item auto-nav__item--active">
          <a href="#" className="auto-nav__link auto-nav__link--active">Характеристики</a>
        </li>
        <li className="auto-nav__item">
          <a href="#" className="auto-nav__link">Отзывы</a>
        </li>
        <li className="auto-nav__item">
          <a href="#" className="auto-nav__link">Контакты</a>
        </li> */}
      </ul>
      {tabContent}
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  // film: FilmShape,
  // reviews: ReviewsShape,
  setActiveTab: PropTypes.func,
};

const mapStateToProps = (state) => ({
  // film: getFilm(state),
  // reviews: getReviews(state),
  activeTab: getActiveTab(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveTab(tabId) {
    dispatch(ActionCreator.setActiveTab(tabId));
  },
});

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
