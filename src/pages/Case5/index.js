import { useState, Fragment } from 'react';

import { ContactsForm } from '../../shared/components/ContactsForm';
import { Footer } from '../../shared/components/Footer';
import { MainNavMenu } from '../../shared/components/MainNavMenu';
import logo from '../../shared/assets/logo.svg';
import burgerIcon from '../../pages/Main/assets/burger.svg';
import closeIcon from '../../shared/assets/closeIcon.svg';
import tetrikaLogo from '../../shared/assets/tetrika.svg';

import './styles.css';

import tetrikaOnlineSchoolMockImage from './assets/tetrikaOnlineSchoolMock.png';
import tetrikaVirtualMockImage from './assets/tetrikaVirtualMock.png';
import tetrikaAdMockImage from './assets/tetrikaAdMock.png';
import tetrikaHomeMockImage from './assets/tetrikaHomeMock.png';
import tetrikaTutorDreamImage from './assets/tetrikaTutorDream.png';
import tetrikaOnlineMockImage from './assets/tetrikaOnlineMock.png';
import tetrikaYesICanImage from './assets/tetrikaYesICan.png';

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

export const TetrikaApp = () => {
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
                    <h2 className='case1__title'>сайт и платформа для онлайн-школы</h2>
                    <section className='case1__intro case1-intro'>
                        <div className='case1-intro__client case1-intro__block'>
                            <span className='case1-intro-el case1-intro__client-title'>клиент</span>
                            <img
                                className='case1-intro__img'
                                style={{ marginTop: '12px' }}
                                width='232px'
                                height='40px'
                                src={tetrikaLogo}
                                alt='tetrika' />
                        </div>
                        <div className='case1-intro__period case1-intro__block tetrika-intro__period'>
                            <span className='case1-intro-el'>период</span>
                            <span>2018-2020 год, 1.5&nbsp;года</span>
                        </div>
                        <div className='case1-intro__work case1-intro__block'>
                            <span className='case1-intro-el'>область работы</span>
                            <div className='case1-intro__badges'>
                                <Badge title='Брендинг' />
                                <Badge title='Продуктовый дизайн' />
                                <Badge title='Веб-дизайн' />
                                <Badge title='Посадочная страница' />
                                <Badge title='Оформление соц. сетей' />
                            </div>
                        </div>
                    </section>
                    <section className='tetrika-about'>
                        <img
                            className='img--full tetrika-about__image'
                            src={tetrikaOnlineSchoolMockImage}
                            alt='tetrika online school' /> 
                        <div className='tetrika-about__content'>
                            <div className='tetrika__column'>
                                <h4 className='title--default'>о чем проект</h4>
                                <p className='content--default'>
                                    Тетрика — московский стартап онлайн-школы по&nbsp;подготовке к&nbsp;экзаменам
                                    и&nbsp;поиску репетиторов. Команда основателей школы обратилась к&nbsp;нам
                                    в&nbsp;самом начале своего пути и&nbsp;доверила очень ценную часть — брендинг
                                    (лого, презентации, вебинары и&nbsp;др) и&nbsp;разработку интерфейсов
                                    онлайн-школы
                                </p>
                            </div>
                            <div className='tetrika__column'>
                                <h4 className='title--default'>что нам удалось</h4>
                                <ul className='tetrika__list'>
                                    <li className='tetrika__list-item'>Разработали фирменный стиль школы</li>
                                    <li className='tetrika__list-item'>Подготовили веб-сайт и оформили социальные сети </li>
                                    <li className='tetrika__list-item'>Создали дизайн платформы онлайн-школы</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className='section--default'>
                        <div className='tetrika-result'>
                            <div className='tetrika__column'>
                                <h4 className='title--default'>работа над платформой</h4>
                                <p className='content--default'>
                                    Вместе с командой разработали интерфейс онлайн-школы (видео звонок, 
                                    интерактивная доска, тесты и&nbsp;прочее), а&nbsp;также помогли в&nbsp;создании
                                    фирменого стиля
                                </p>
                            </div>
                            <div className='tetrika__column'>
                                <h4 className='title--default'>результат</h4>
                                <ul className='tetrika__list'>
                                    <li className='tetrika__list-item'>Тетрика стала лучшей онлайн-школой 2019 года</li>
                                    <li className='tetrika__list-item'>В 2020 году школа вошла в состав Mail Group  </li>
                                </ul>
                            </div>
                        </div>
                        <div className='tetrika-result__images'>
                            <img
                                className='img--full tetrika-result__image'
                                src={tetrikaVirtualMockImage}
                                alt='tetrika result image' />
                            <img
                                className='img--full tetrika-result__image'
                                src={tetrikaHomeMockImage}
                                alt='tetrika result image' />
                            <img
                                className='img--full tetrika-result__image'
                                src={tetrikaTutorDreamImage}
                                alt='tetrika result image' />
                            <img
                                className='img--full tetrika-result__image'
                                src={tetrikaOnlineMockImage}
                                alt='tetrika result image' />
                        </div>
                    </section>
                    <section className='section--default tetrika-social__section'>
                        <div className='tetrika-social'>
                            <h4 className='title--default'>оформление соц. сетей</h4>
                            <p className='content--default tetrika-social__content'>
                                Мы разработали библиотеку шаблонов и&nbsp;описали главные принципы
                                в&nbsp;оформлении соц.&nbsp;сетей
                            </p>
                        </div>
                        <div className='tetrika-social__images'>
                            <img
                                className='img--full tetrika-social__image'
                                src={tetrikaAdMockImage}
                                alt='tetrika social image' />
                            <img
                                className='img--full tetrika-social__image'
                                src={tetrikaYesICanImage}
                                alt='tetrika social image' />
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
                                    <a onClick={handleMenuItemClick} href='#portfolio'>Наши работы</a>
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