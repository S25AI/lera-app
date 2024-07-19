import { useState, Fragment } from 'react';

import { ContactsForm } from '../../shared/components/ContactsForm';
import { Footer } from '../../shared/components/Footer';
import { MainNavMenu } from '../../shared/components/MainNavMenu';
import logo from '../../shared/assets/logo.svg';
import burgerIcon from '../../pages/Main/assets/burger.svg';
import closeIcon from '../../shared/assets/closeIcon.svg';
import raifLogo from '../../shared/assets/raif.svg';

import finalDesignLoan1 from './assets/finalDesignLoan1.png';
import finalDesignLoan2 from './assets/finalDesignLoan2.png';
import finalDesignLoan3 from './assets/finalDesignLoan3.png';
import finalDesignLoan4 from './assets/finalDesignLoan4.png';
import finalDesignLoan5 from './assets/finalDesignLoan5.png';
import raifLoanMock from './assets/raifLoanMock.png';
import mobileAppLoanMock from './assets/mobileAppLoanMock.png';
import mobileAppLoanMockMobile from './assets/mobileAppLoanMock-m.png';
import factoidImg from './assets/factoid.svg';

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

const Card = ({ src, alt, label, title }) => {
    return (
        <div className='case1__card'>
            <img className='case1__card-img' src={src} alt={alt} width='27px' height='27px' />
            <div className='case1__card-content'>
                <span className='case1__card-label'>{label}</span>
                <span className='case1__card-title'>{title}</span>
            </div>
        </div>
    );
};

export const LoanApp = () => {
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
                    <h2 className='case1__title'>Редизайн заявки на&nbsp;кредит<br />для ИП&nbsp;и&nbsp;Юр.&nbsp;лиц</h2>
                    <section className='case1__intro case1-intro'>
                        <div className='case1-intro__client case1-intro__block'>
                            <span className='case1-intro-el case1-intro__client-title'>клиент</span>
                            <img
                                className='case1-intro__img'
                                width='147px'
                                height='59px'
                                src={raifLogo}
                                alt='raif' />
                        </div>
                        <div className='case1-intro__period case1-intro__block'>
                            <span className='case1-intro-el'>период</span>
                            <span>Март-май 2020, 4&nbsp;месяца</span>
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
                    <section className='case2__descr'>
                        <img src={raifLoanMock} className='img--full case2-descr__img' alt='loan app img' />
                        <div className='case1__descr-view'>
                            <div className='case1__descr-block'>
                                <span className='case1__descr-title'>описание задачи</span>
                                <span className='case1__descr-content'>
                                    Провести UX-аудит текущей заявки на&nbsp;кредит, предложить
                                    улучшения и&nbsp;перевести интерфейс на&nbsp;новую дизайн систему,
                                    а&nbsp;также создать актальную мобильную версию
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
                    <section className='case2__final-design'>
                        <div className='case2__final-design-top'>
                            <article>
                                <h4 className='title--default'>От исследования к финальному дизайну</h4>
                                <p className='case2__final-design-content content--default'>
                                    Наша команда выявила основные UX проблемы, которые мешали
                                    клиентам проходить по&nbsp;воронке и&nbsp;оформить кредит. После мы
                                    подготовили новый дизайн и&nbsp;провели юзабили-тестирование
                                    с&nbsp;реальными пользователями, чтобы убедиться, что новая заявка им&nbsp;понятна
                                    и&nbsp;удобна. 
                                </p>
                            </article>
                            <img src={factoidImg} className='case2__final-design-factoid' alt='factoid' />
                        </div>

                        <div className='case2__final-design-works'>
                            <img src={finalDesignLoan1} alt='raif loan app' />
                            <img src={finalDesignLoan2} alt='raif loan app' />
                            <img src={finalDesignLoan3} alt='raif loan app' />
                            <img src={finalDesignLoan4} alt='raif loan app' />
                            <img src={finalDesignLoan5} alt='raif loan app' />
                        </div>
                    </section>
                    <section className='case2__mobile-app'>
                        <img
                            src={mobileAppLoanMock}
                            className='img--full case2__mobile-app-img'
                            alt='mobile app loan' />
                        <img
                            src={mobileAppLoanMockMobile}
                            className='img--full case2__mobile-app-img--mobile'
                            alt='mobile app loan' />
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