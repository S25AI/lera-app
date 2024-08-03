import { useState, Fragment } from 'react';

import { ContactsForm } from '../../shared/components/ContactsForm';
import { Footer } from '../../shared/components/Footer';
import { MainNavMenu } from '../../shared/components/MainNavMenu';
import logo from '../../shared/assets/logo.svg';
import burgerIcon from '../../pages/Main/assets/burger.svg';
import closeIcon from '../../shared/assets/closeIcon.svg';
import travalingLogo from '../../shared/assets/travalign.svg';

import './styles.css';

import travalignMockImage from './assets/travalignMock.png';
import travalignApp1Image from './assets/travalignApp1.png';
import travalignApp2Image from './assets/travalignApp2.png';
import travalignInterfaceImage from './assets/travalignInterface.png';
import travalignInterfaceImageLaptop from './assets/travalignInterfaceLaptop.png';
import travalignInterfaceImageMobile from './assets/travalignInterfaceMobile.png';
import travalignTicket1Image from './assets/travalignTicket1.png';
import travalignTicket1ImageMobile from './assets/travlignTicket1Mobile.png';
import travalignTicket2Image from './assets/travalignTicket2.png';
import travalignTicket3Image from './assets/travalignTicket3.png';

const Header = ({ openModal }) => {
    return (
        <div className='header'>
            <a href='/lera-app' alt='logo'>
                <img src={logo} alt='logo' />
            </a>
            <MainNavMenu />
            <MainNavMobileMenu openModal={openModal} />
        </div>
    );
};

const MainNavMobileMenu = ({ openModal }) => {
    return (
        <div className='main-menu--mobile'>
            <img
                src={burgerIcon}
                alt='burgerIcon'
                width='24px'
                height='24px'
                onClick={openModal} />
        </div>
    );
}

const Badge = ({ title }) => {
    return (
        <div className='badge'>{title}</div>
    );
};

export const TravelTechApp = () => {
    const [isShowModal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleMenuItemClick = () => {
        closeModal();
    }

    return (
        <Fragment>
            <div class='case1'>
                <div className='container'>
                    <Header openModal={openModal} />
                    <h2 className='case1__title'>Личный кабинет для travel-tech компании </h2>
                    <section className='case1__intro case1-intro'>
                        <div className='case1-intro__client case1-intro__block'>
                            <span className='case1-intro-el case1-intro__client-title'>клиент</span>
                            <img
                                className='case1-intro__img'
                                width='183px'
                                height='40px'
                                src={travalingLogo}
                                alt='raif' />
                        </div>
                        <div className='case1-intro__period case1-intro__block'>
                            <span className='case1-intro-el'>период</span>
                            <span>2023-2024, 1&nbsp;год</span>
                        </div>
                        <div className='case1-intro__work case1-intro__block'>
                            <span className='case1-intro-el'>область работы</span>
                            <div className='case1-intro__badges'>
                                <Badge title='Продуктовый дизайн' />
                                <Badge title='Разработка дизайн-системы Фигма' />
                                <Badge title='Разработка личного кабинета' />
                            </div>
                        </div>
                    </section>
                    <section className='travalign-home'>
                        <img
                            className='img--full travalign-home__img'
                            src={travalignMockImage}
                            alt='travalign image' />
                        <div className='travalign-home__content'>
                            <div className='travalign-home__content--column'>
                                <h4 className='title--default'>
                                    описание задачи
                                </h4>
                                <p className='content--default-base'>
                                    Компания Travalign обратилась к нам для разработки личного кабинета, 
                                    в&nbsp;котором их клиенты смогут выбирать опции полета по&nbsp;своему запросу,
                                    общаться со&nbsp;своим тревел агентом и отслеживать последнюю информацию
                                    о&nbsp;путешествии.
                                </p>
                            </div>
                            <div className='travalign-home__content--column'>
                                <h4 className='title--default'>
                                    о компании
                                </h4>
                                <p className='content--default-base'>
                                    Travalign (в прошлом BCC) - это онлайн консолидатор авиабилетов бизнес класса.
                                    Компания предоставляет сервис по&nbsp;поиску выгодных авиабилетов бизнес
                                    и&nbsp;первого класса, а&nbsp;также поддержку в&nbsp;течение всего путешествия
                                    с&nbsp;помощью собственных Тревел Экспертов
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className='section--default'>
                        <div className='travalign-app'>
                            <h4 className='title--default'>
                                Простая и понятная коммуникация
                            </h4>
                            <p className='content--default-base travalign-app__content'>
                                После того, как клиент оставил заявку о&nbsp;своем путешествии на сайте, 
                                он переходит в&nbsp;личный кабинет, где должен увидеть статус рассмотрения своей заявки.
                                Мы сделали этот экран простым и&nbsp;удобным, чтобы вся важная информация легко
                                считывалась с&nbsp;первого взгляда
                            </p>
                            <div className='travalign-app__images'>
                                <img
                                    className='travalign-app__image'
                                    src={travalignApp1Image}
                                    alt='travalign app' />
                                <img
                                    className='travalign-app__image'
                                    src={travalignApp2Image}
                                    alt='travalign app' />
                            </div>
                        </div>
                    </section>
                    <section className='section--default'>
                        <img
                            src={travalignInterfaceImage}
                            className='img--full travalign-interface'
                            alt='travalign interface' />
                        <img
                            src={travalignInterfaceImageLaptop}
                            className='img--full travalign-interface--laptop'
                            alt='travalign interface' />
                        <img
                            src={travalignInterfaceImageMobile}
                            className='img--full travalign-interface--mobile'
                            alt='travalign interface' />
                    </section>
                    <section className='section--default'>
                        <div className='travalign-tickets'>
                            <h4 className='title--default'>оформление билетов</h4>
                            <p className='content--default-base travalign-tickets__content'>
                                Последние и&nbsp;не менее важные шаги это заполнение данных пассажиров и&nbsp;банковской карты.
                                Нашей задачей было сделать их максимально удобными, используя лучшие практики юзабилити,
                                чтобы ничто не&nbsp;останавливало пользователя перед покупкой билетов
                            </p>
                            <div className='travalign-tickets__images'>
                                <div className='travalign-tickets__column'>
                                    <img
                                        className='travalign-tickets__image img--full'
                                        src={travalignTicket1Image}
                                        alt='travalign ticket' />
                                    <img
                                        className='travalign-tickets__image--mobile img--full'
                                        src={travalignTicket1ImageMobile}
                                        alt='travalign ticket' />
                                </div>
                                <div className='travalign-tickets__column'>
                                    <img
                                        className='travalign-tickets__image img--full'
                                        src={travalignTicket2Image}
                                        alt='travalign ticket' />
                                    <img
                                        className='travalign-tickets__image img--full'
                                        src={travalignTicket3Image}
                                        alt='travalign ticket' />
                                </div>  
                            </div>
                        </div>    
                    </section>
                    <ContactsForm />
                    <Footer />
                </div>
            </div>
            {
                isShowModal && (
                    <div className='main-modal'>
                        <div className='main-modal__header'>
                            <img
                                src={closeIcon}
                                alt='closeMenu'
                                width='24px'
                                height='24px'
                                onClick={closeModal} />
                        </div>
                        <div className='main-modal__content'>
                            <ul className='main-modal__list'>
                                <li className='main-modal__list-item'>
                                    <a onClick={handleMenuItemClick} href='#contacts'>Контакты</a>
                                </li>
                                <li className='main-modal__list-item'>
                                    <a onClick={handleMenuItemClick} href='#portfolio'>Портфолио</a>
                                </li>
                                <li className='main-modal__list-item'>
                                    <a onClick={handleMenuItemClick} href='#services'>Услуги</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </Fragment>
    );
};