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
        <p className="promo__bank-title">Example</p>
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
