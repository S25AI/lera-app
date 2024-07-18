import { useState, Fragment } from 'react';

import { ContactsForm } from '../../shared/components/ContactsForm';
import { Footer } from '../../shared/components/Footer';
import { MainNavMenu } from '../../shared/components/MainNavMenu';
import logo from '../../shared/assets/logo.svg';
import burgerIcon from '../../pages/Main/assets/burger.svg';
import guaranteesImg from './assets/raifMockup.png';
import guaranteesImgMobile from './assets/raifMockup-m.png';
import defineProductImg from './assets/raifCJM.png';
import raifLogo from './assets/raif.svg';
import groupIcon from './assets/group.svg';
import timeIcon from './assets/time.svg';
import worldIcon from './assets/world.svg';
import partnerCabinet from './assets/partnerCabinet.png';
import partnerAppMock1 from './assets/partnerAppMock1.png';
import partnerAppMock2 from './assets/partnerAppMock2.png';
import partnerAppMock3 from './assets/partnerAppMock3.png';
import partnerAppMock4 from './assets/partnerAppMock4.png';
import partnerAppMock5 from './assets/partnerAppMock5.png';
import partnerAppMock6 from './assets/partnerAppMock6.png';
import finalProductMock from './assets/finalProductMock.png';
import partnerCabinetMock1 from './assets/partnerCabinetMock1.png';
import partnerCabinetMock2 from './assets/partnerCabinetMock2.png';
import closeIcon from '../../shared/assets/closeIcon.svg';

import './styles.css';

const Header = ({ openModal }) => {
    return (
        <div className='header'>
            <a href='/' alt='logo'>
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

export const BankPortfolio = () => {
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
                    <h2 className='case1__title'>Интерфейс личного кабинета банковских гарантий</h2>
                    <section className='case1__intro case1-intro'>
                        <div className='case1-intro__client case1-intro__block'>
                            <span className='case1-intro-el case1-intro__client-title'>клиент</span>
                            <img className='case1-intro__img' width='147px' height='59px' src={raifLogo} alt='raif' />
                        </div>
                        <div className='case1-intro__period case1-intro__block'>
                            <span className='case1-intro-el'>период</span>
                            <span>Январь-март 2020, 3&nbsp;месяца</span>
                        </div>
                        <div className='case1-intro__work case1-intro__block'>
                            <span className='case1-intro-el'>область работы</span>
                            <div className='case1-intro__badges'>
                                <Badge title='Продуктовый дизайн' />
                                <Badge title='Веб-дизайн' />
                                <Badge title='Аутсорс дизайн команда' />
                                <Badge title='Проектирование интерфейсов' />
                            </div>
                        </div>
                    </section>
                    <section className='case1__descr'>
                        <img className='case1__descr-img' src={guaranteesImg} alt='guarantees raif' />
                        <img className='case1__descr-img--mobile img--full' src={guaranteesImgMobile} alt='guarantees raif' />
                        <div className='case1__descr-view'>
                            <div className='case1__descr-block'>
                                <span className='case1__descr-title'>описание задачи</span>
                                <span className='case1__descr-content'>
                                    Райффайзен банк обратились к нам с&nbsp;задачей по&nbsp;разработке
                                    интерфейса личного кабинета для агентов по&nbsp;оформлению
                                    банковских гарантий для малого бизнеса
                                </span>
                            </div>
                            <div className='case1__descr-block'>
                                <span className='case1__descr-title'>что нам удалось</span>
                                <span className='case1__descr-content'>
                                    <ul className='case1__descr-list'>
                                        <li className='case1__descr-list-item'>
                                            Определили MVP продукта и выстроили его CJM
                                        </li>
                                        <li className='case1__descr-list-item'>
                                            Провели серию юзабилити исследований
                                        </li>
                                        <li className='case1__descr-list-item'>
                                            Спроектировали интерфейс личного кабинета
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <div className='case1__descr-define'>
                            <img src={defineProductImg} width='592px' height='auto' alt='define product' />
                            <div className='case1__descr-block'>
                                <span className='case1__descr-title'>определяем mvp продукта</span>
                                <span className='case1__descr-content'>
                                    Прежде чем начать работу над проектом, мы с&nbsp;командой составили карту
                                    пути клиента и&nbsp;определили самый необходимый функционал для запуска
                                    продукта и&nbsp;покрытия всех пользовательских сценариев
                                </span>
                            </div>
                        </div>
                        <div className='case1__descr-research'>
                            <div className='case1__descr-block'>
                                <span className='case1__descr-title'>Продуктовое исследование</span>
                                <span className='case1__descr-content'>
                                    Также по&nbsp;запросу заказчика, мы&nbsp;провели исследование рынка
                                    и&nbsp;количественный опрос, в&nbsp;котором приняло участие 150
                                    агентов&nbsp;банковских гарантий. С&nbsp;помощью этого опроса,
                                    мы&nbsp;помогли банку понять, будет&nbsp;ли&nbsp;продукт пользоваться
                                    спросом на&nbsp;рынке и&nbsp;какие основные потребности
                                    у&nbsp;целевой аудитории
                                </span>
                            </div>
                            <div className='case1__descr-cards'>
                                <Card src={groupIcon} alt='group icon' label='Участники' title='150 агентов' />
                                <Card src={timeIcon} alt='time icon' label='Время' title='15 минут' />
                                <Card src={worldIcon} alt='world icon' label='География' title='вся россия' />
                            </div>
                        </div>
                    </section>
                    <section className='case1__works case1-works'>
                        <img src={partnerCabinet} className='case1-works__img' alt='partner cabinet' />
                        <div className='case1-works__partner-cabinet'>
                            <article>
                                <h4 className='case1-works__partner-cabinet-title'>
                                    Агентский кабинет
                                </h4>
                                <p className='case1-works__partner-cabinet-content'>
                                    Разработали интерфейс агентского кабинета, в&nbsp;котором агент может
                                    отслеживать свой уровень и&nbsp;вознаграждения от&nbsp;банка, сохранять
                                    клиентов и&nbsp;создавать заявки на&nbsp;банковские гарантии
                                </p>
                            </article>
                            <img src={partnerCabinetMock1} alt='partner cabinet' className='img--full' />
                            <img src={partnerCabinetMock2} alt='partner cabinet' className='img--full' />
                        </div>
                        <div className='case1-works__partner-app'>
                            <h4 className='case1-works__title'>
                                Заявка на оформление банковской гарантии
                            </h4>
                            <p className='case1-works__content'>
                                Не менее важная часть кабинета&nbsp;– это&nbsp;заявка на&nbsp;оформление банковской
                                гарантии. Нам было важно учесть все требования бизнеса и&nbsp;сделать
                                удобный интерфейс, чтобы агенты могли сократить время на&nbsp;создание каждой
                                гарантии 
                            </p>
                            <div className='case1-works__partner-works'>
                                <div className='case1-works__partner-works-row'>
                                    <img src={partnerAppMock1} alt='partner app mock' />
                                    <img src={partnerAppMock2} alt='partner app mock' />
                                    <img src={partnerAppMock3} alt='partner app mock' />
                                </div>
                                <div className='case1-works__partner-works-row'>
                                    <img src={partnerAppMock4} alt='partner app mock' />
                                    <img src={partnerAppMock5} alt='partner app mock' />
                                    <img src={partnerAppMock6} alt='partner app mock' />
                                </div>
                            </div>
                        </div>
                        <div className='case1-works__final'>
                            <h4 className='case1-works__title'>
                                Финишная прямая
                            </h4>
                            <p className='case1-works__content case1-works__final-content'>
                                В итоге за&nbsp;3 месяца работы заказчик получил интерфейс готового продукта
                                со&nbsp;всеми необходимыми исследованиями и&nbsp;списком метрик для
                                отслеживания успеха проекта. Макеты были с&nbsp;любовью созданы в&nbsp;Фигме
                                (с&nbsp;возможностью редактирования в&nbsp;будущем ин-хаус дизайнеров)
                                и&nbsp;заботливо переданы на&nbsp;разработку банковским разработчикам
                            </p>
                            <img src={finalProductMock} className='case1-works__final-img img--full' alt='final product mock' />
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