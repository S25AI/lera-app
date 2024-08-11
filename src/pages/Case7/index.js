import { useState, Fragment } from 'react';

import { ContactsForm } from '../../shared/components/ContactsForm';
import { Footer } from '../../shared/components/Footer';
import { MainNavMenu } from '../../shared/components/MainNavMenu';
import logo from '../../shared/assets/logo.svg';
import burgerIcon from '../../pages/Main/assets/burger.svg';
import closeIcon from '../../shared/assets/closeIcon.svg';
import delovayaRusLogo from '../../shared/assets/delovayaRusIcon.svg';

import './styles.css';

import delovayaRusHomeMockImage from './assets/delovayaRusHome.png';
import delovayaRusMainMockImage from './assets/delovayaRusMainMock.png';
import delovayaRusPersonalMockImage from './assets/delovayaRusPersonalMock.png';
import delovayaRusOrderMockImage from './assets/delovayaRusOrderMock.png';

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

export const DelovayaRus = () => {
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
                    <h2 className='case1__title case-rus__title'>
                        Редизайн интернет-магазина по&nbsp;продаже оборудования для&nbsp;бизнеса&nbsp;HoReCa </h2>
                    <section className='case1__intro case1-intro case-rus__intro'>
                        <div className='case1-intro__client case1-intro__block'>
                            <span className='case1-intro-el case1-intro__client-title'>клиент</span>
                            <img
                                width='233px'
                                height='44px'
                                src={delovayaRusLogo}
                                alt='raif' />
                        </div>
                        <div className='case1-intro__period case-rus__period case1-intro__block'>
                            <span className='case1-intro-el'>период</span>
                            <span>2023-2024, 5&nbsp;месяцев</span>
                        </div>
                        <div className='case1-intro__work case1-intro__block'>
                            <span className='case1-intro-el'>область работы</span>
                            <div className='case1-intro__badges'>
                                <Badge title='Редизайн' />
                                <Badge title='Интернет-магазин' />
                            </div>
                        </div>
                    </section>
                    <img
                        className='img--full rus-home__img'
                        src={delovayaRusHomeMockImage}
                        alt='delovaya rus home image' />
                    <section className='section--default'>
                        <div className='rus-main__content'>
                            <h2 className='rus-title'>Редизайн главной страницы</h2>
                            <p className='content--default-base rus-content'>
                                За годы стремительного роста компании сайт перестал отвечать ее потребностям.
                                Поэтому в&nbsp;создании нового дизайна для нас было важно отобразить
                                переосмысленные принципы компании, актуальные услуги, а&nbsp;также улучшить
                                структуру и&nbsp;навигацию интернет-магазина
                            </p>
                        </div>
                        <img
                            className='img--full rus-main__img'
                            src={delovayaRusMainMockImage}
                            alt='delovaya rus main image' />
                    </section>
                    <section className='section--default'>
                        <div className='rus-main__content'>
                            <h2 className='rus-title'>внутренние страницы</h2>
                            <p className='content--default-base rus-content'>
                                В процессе редизайна интернет-магазина мы&nbsp;также поработали над&nbsp;всеми внутренними
                                страницами: корзина, оформление заказа, каталог и&nbsp;другие
                            </p>
                        </div>
                        <img
                            className='img--full rus-main__img'
                            src={delovayaRusPersonalMockImage}
                            alt='delovaya rus personal image' />
                    </section>
                    <section className='section--default section-rus--last'>
                        <div className='rus-main__content'>
                            <h2 className='rus-title'>страница товара</h2>
                            <p className='content--default-base rus-order__content'>
                                Это была одна из&nbsp;самых сложных и&nbsp;нагруженных страниц магазина. Нам удалось
                                упростить ее&nbsp;структуру, но&nbsp;при&nbsp;этом сохранить весь функционал и&nbsp;контент
                            </p>
                        </div>
                        <img
                            className='img--full rus-main__img'
                            src={delovayaRusOrderMockImage}
                            alt='delovaya rus personal image' />
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