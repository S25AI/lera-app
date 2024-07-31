import { useState, Fragment } from 'react';

import { ContactsForm } from '../../shared/components/ContactsForm';
import { Footer } from '../../shared/components/Footer';
import { MainNavMenu } from '../../shared/components/MainNavMenu';
import logo from '../../shared/assets/logo.svg';
import burgerIcon from '../../pages/Main/assets/burger.svg';
import closeIcon from '../../shared/assets/closeIcon.svg';
import vtbLogo from '../../shared/assets/vtb.svg';

import vtbLoanMockImage from './assets/vtbLoanMock.png';
import resultMockImage from './assets/resultMock.png';
import mobileBlockMockImage from './assets/mobileBlockMock.png';
import resultMock1Image from './assets/resultMock1.png';
import resultMock2Image from './assets/resultMock2.png';
import resultMock3Image from './assets/resultMock3.png';

import './styles.css';

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

export const VtbApp = () => {
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
                    <h2 className='case1__title'>Редизайн заявки на&nbsp;кредит</h2>
                    <section className='case1__intro case1-intro'>
                        <div className='case1-intro__client case1-intro__block'>
                            <span className='case1-intro-el case1-intro__client-title'>клиент</span>
                            <img
                                className='case1-intro__img'
                                width='109px'
                                height='67px'
                                src={vtbLogo}
                                alt='raif' />
                        </div>
                        <div className='case1-intro__period case1-intro__block'>
                            <span className='case1-intro-el'>период</span>
                            <span>Январ-апрель 2019, 4&nbsp;месяца</span>
                        </div>
                        <div className='case1-intro__work case1-intro__block'>
                            <span className='case1-intro-el'>область работы</span>
                            <div className='case1-intro__badges'>
                                <Badge title='Продуктовый дизайн' />
                                <Badge title='Веб-дизайн' />
                                <Badge title='Аутсорс дизайн команда' />
                                <Badge title='Проектирование интерфейсов' />
                                <Badge title='Мобильное приложение' />
                            </div>
                        </div>
                    </section>
                    <section>
                        <img
                            src={vtbLoanMockImage}
                            className='img--full case3-descr__img'
                            alt='loan app img' />
                        <div className='case1__descr-view'>
                            <div className='case1__descr-block'>
                                <span className='case1__descr-title'>описание задачи</span>
                                <span className='case1__descr-content'>
                                    Провести UX-аудит главной кредитной заявки банка “Кредит на&nbsp;все цели
                                    для физических лиц”, предложить улучшения и&nbsp;перевести интерфейс на&nbsp;новую
                                    дизайн систему
                                </span>
                            </div>
                            <div className='case1__descr-block'>
                                <span className='case1__descr-title'>что нам удалось</span>
                                <span className='case1__descr-content'>
                                    <ul className='case1__descr-list'>
                                        <li className='case1__descr-list-item'>
                                            Провели юзабилити-тестирование текущей заявки на кредит
                                        </li>
                                        <li className='case1__descr-list-item'>
                                            Определили основные проблемы и предложили их решение
                                        </li>
                                        <li className='case1__descr-list-item'>
                                            Перевели заявку на новую дизайн систему
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className='case3__section'>
                        <h4 className='case3__title'>
                            Выявляем основные проблемы текущей формы
                        </h4>
                        <div className='case3__content case3__problems-content'>
                            ВТБ Банк обратились к&nbsp; нам с&nbsp;проблемой низкой конверсии в&nbsp;заявку на&nbsp;форме
                            и&nbsp;так как эта заявка — один из&nbsp;флагманских продуктов, нам важно было погрузиться в&nbsp;задачу
                            и&nbsp;выяснить, в&nbsp;чем могут быть причины низкой конверсии. Для этого мы помогли команде
                            организовать юзабилити исследование.
                        </div>
                        <div className='case3__features'>
                            <div className='case3__feature case3-feature'>
                                <h4 className='case3-feature__title'>методология исследования</h4>
                                <ul className='case3-feature__list'>
                                    <li className='case3-feature__list-item'>
                                        Традиционное юзабилити исследование
                                    </li>
                                    <li className='case3-feature__list-item'>
                                        Респондент заполняет кредитную заявку на&nbsp;сайте банка на&nbsp;любой продукт,
                                        который бы он взял в&nbsp;жизни
                                    </li>
                                    <li className='case3-feature__list-item'>
                                        Используемые продукты: Кредит наличными на&nbsp;любые цели,
                                        Рефинансирование и&nbsp;Кредитная карта
                                    </li>
                                </ul>
                            </div>
                            <div className='case3_feature case3-feature'>
                                <h4 className='case3-feature__title'>Портрет респондента</h4>
                                <ul className='case3-feature__list'>
                                    <li className='case3-feature__list-item'>
                                        Возраст от 21 до 70
                                    </li>
                                    <li className='case3-feature__list-item'>
                                        Мужчины и женщины равномерно
                                    </li>
                                    <li className='case3-feature__list-item'>
                                        Клиенты ВТБ и других российских банков
                                    </li>
                                    <li className='case3-feature__list-item'>
                                        Официально трудоустроены
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className='case3__section'>
                        <img
                            src={resultMockImage}
                            className='case3-result__image img--full'
                            alt='result mock' />
                        <div className='case3-result__container'>
                            <h4 className='case3-feature__title'>Результат</h4>
                            <ul className='case3-feature__list'>
                                <li className='case3-feature__list-item case3-feature__list-item--laptop'>
                                    Увеличили коверсию в оформление кредита
                                </li>
                                <li className='case3-feature__list-item case3-feature__list-item--laptop'>
                                    Сделали современный и удобный дизайн
                                </li>
                                <li className='case3-feature__list-item case3-feature__list-item--laptop'>
                                    Устранили UX ошибки старой формы
                                </li>
                            </ul>
                            <div className='case-result__images'>
                                <img
                                    src={resultMock1Image}
                                    className='img--full'
                                    alt='result block mock' />
                                <img
                                    src={resultMock2Image}
                                    className='img--full'
                                    alt='result block mock' />
                                <img
                                    src={resultMock3Image}
                                    className='img--full'
                                    alt='result block mock' />
                            </div>

                        </div>
                    </section>
                    <section className='case3__section'>
                        <img
                            src={mobileBlockMockImage}
                            className='img--full'
                            alt='mobile block mock' />
                    </section>
                    <section className='case3__section' />
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