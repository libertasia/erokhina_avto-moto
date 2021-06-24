import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../img/logo.svg';
import {AppRoute} from '../../const';
import Tabs from '../tabs/tabs';
import Slider from '../slider/slider';


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
        <section className="auto-card">
          <h1 className="visually-hidden">Автомобиль Марпех 11</h1>
          <div className="auto-card__info">
            <div className="auto-card__slider slider">
              <Slider />
            </div>

            <div className="auto-card__promo">
              <h2 className="auto-card__title">Марпех 11</h2>
              <ul className="auto-card__details-list">
                <li className="auto-card__details-item auto-card__details-item--petrol">Бензин</li>
                <li className="auto-card__details-item auto-card__details-item--mechanics">Механика</li>
                <li className="auto-card__details-item auto-card__details-item--horse">100 л.с.</li>
                <li className="auto-card__details-item auto-card__details-item--engine">1.4 л</li>
              </ul>
              <div className="auto-card__price">
                <span className="auto-card__discount-price">2 300 000 ₽</span>
                <span className="auto-card__normal-price">2 400 000 ₽</span>
              </div>
              <button className="auto-card__btn-request" type="button">Оставить заявку</button>
              <button className="auto-card__btn-loan" type="button">В кредит от 11 000 ₽</button>
            </div>
          </div>

          <Tabs />
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
