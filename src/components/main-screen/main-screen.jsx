import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../img/logo.svg';
import {AppRoute} from '../../const';
// import ConversionForm from '../conversion-form/conversion-form';
// import ConversionHistory from '../conversion-history/conversion-history';

const MainScreen = () => {

  return (
    <React.Fragment>
      <header className="header">
        <nav className="header__navigation container">
          <Link className="logo" to={AppRoute.ROOT}>
            <img className="logo__image" src={logo} width={134} height={55} alt="Логотип Авто Мото»" />
          </Link>
          <ul className="site-navigation">
            <li className="site-navigation__item"><Link className="site-navigation__link" to={AppRoute.CARS}>Автомобили</Link></li>
            <li className="site-navigation__item"><Link className="site-navigation__link" to={AppRoute.CONTACTS}>Контакты</Link></li>
            <li className="site-navigation__item"><Link className="site-navigation__link" to={AppRoute.SERVICES}>Услуги</Link></li>
            <li className="site-navigation__item"><Link className="site-navigation__link" to={AppRoute.VACANCIES}>Вакансии</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main container">
        {/* <p className="promo__bank-title">Example</p> */}
        {/* <div className="promo">
          <div className="container promo__container">
            <p className="promo__bank-title">Лига Банк</p>
            <p className="promo__text">Кредиты на любой случай</p>
            <Link className="promo__link" to={AppRoute.LOAN}>Рассчитать кредит</Link>
          </div>
        </div>
        <div className="container">
          <h1 className="main__header">Конвертер валют</h1>
          <ConversionForm />
          <ConversionHistory />
        </div> */}
        <section className="auto-card">
          <h1 className="visually-hidden">Автомобиль Марпех 11</h1>
          <div className="auto-card__info">
            <div className="auto-card__slider slider">
            </div>
            <div className="auto-card__info info">
            </div>
          </div>

          <div className="auto-card__desc auto-nav">
            <ul className="auto-nav__list">
              <li className="auto-nav__item auto-nav__item--active">
                <a href="#" className="auto-nav__link auto-nav__link--active">Характеристики</a>
              </li>
              <li className="auto-nav__item">
                <a href="#" className="auto-nav__link">Отзывы</a>
              </li>
              <li className="auto-nav__item">
                <a href="#" className="auto-nav__link">Контакты</a>
              </li>
            </ul>
            <div className="avto-nav__text visually-hidden">
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
            <div className="auto-nav__reviews reviews visually-hidden">
              <button className="reviews__btn" type="button">оставить отзыв</button>
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
              <div className="auto-nav__contacts-map map">
                <img className="map__image" src="https://via.placeholder.com/431x271" width={431} height={271} alt="Карта нахождения магазина в г. Санкт-Петербург" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <ul className="footer__navigation footer-navigation">
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.CORPORATE}>Корпоративным клиентам</Link></li>
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.CLIENTS}>Клиентам</Link></li>
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.RENT}>Аренда авто</Link></li>
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.CARSHARING}>Каршеринг</Link></li>
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.SALE}>Как продать авто</Link></li>
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.TRADEIN}>Trade-in</Link></li>
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.TESTDRIVE}>Test drive</Link></li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default MainScreen;
