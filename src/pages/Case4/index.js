import { useState, Fragment } from 'react';

import { ContactsForm } from '../../shared/components/ContactsForm';
import { Footer } from '../../shared/components/Footer';
import { MainNavMenu } from '../../shared/components/MainNavMenu';
import logo from '../../shared/assets/logo.svg';
import burgerIcon from '../../pages/Main/assets/burger.svg';
import closeIcon from '../../shared/assets/closeIcon.svg';
import singleOpsLogo from '../../shared/assets/singleOps.svg';
import './styles.css';

import HomePageMock from './assets/HomePageMock.png';
import SingleOpsMock from './assets/SingleOpsMock.png';
import SingleOpsCalendar from './assets/SingleOpsCalendar.png';
import SingleOpsRoute from './assets/SingleOpsRoute.png';
import SingleOpsTables from './assets/SingleOpsTables.png';
import SingleOpsMobileAppMock from './assets/SingleOpsMobileAppMock.png';
import mobileApp1Mock from './assets/mobileApp1.png';
import mobileApp2Mock from './assets/mobileApp2.png';
import mobileApp3Mock from './assets/mobileApp3.png';
import mobileApp4Mock from './assets/mobileApp4.png';

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

export const SingleOps = () => {
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
                    <h2 className='case1__title'>
                        веб-Сайт и приложение для американского старт-апа
                    </h2>
                    <section className='case1__intro case-intro--singleOps case1-intro'>
                        <div className='case1-intro__client case1-intro__block'>
                            <span className='case1-intro-el case1-intro__client-title'>клиент</span>
                            <img
                                width='200px'
                                height='40px'
                                src={singleOpsLogo}
                                alt='raif' />
                        </div>
                        <div className='case1-intro__period case-intro__period--singleOps case1-intro__block'>
                            <span className='case1-intro-el'>период</span>
                            <span>2021-2023,&nbsp;2 года</span>
                        </div>
                        <div className='case1-intro__work case1-intro__block'>
                            <span className='case1-intro-el'>область работы</span>
                            <div className='case1-intro__badges'>
                                <Badge title='Продуктовый дизайн' />
                                <Badge title='Веб-дизайн' />
                                <Badge title='Проектирование интерфейсов' />
                                <Badge title='Мобильное приложение' />
                                <Badge title='Посадочная страница' />
                            </div>
                        </div>
                    </section>
                    <section className='case4-home'>
                        <img
                            className='case4-home__img img--full'
                            src={SingleOpsMock}
                            alt='singleOps home page mock' />
                        <div className='case4-home__content'>
                            <div className='case4-home__content-item case4-home__about'>
                                <h4 className='case4__title'>о чем проект</h4>
                                <p className='case4__content'>
                                    SingleOps — американская компания, которая предоставляет своим пользователям
                                    CRM и&nbsp;SaaS систему для ведения «зеленого» бизнеса (по&nbsp;уходу
                                    за&nbsp;газоном, деревьями и&nbsp;придомовыми участками). Нашей задачей 
                                    было обновить старый дизайн сайта, а&nbsp;также веб и&nbsp;мобильного приложения.
                                </p>
                            </div>
                            <div className='case4-home__content-item'>
                                <h4 className='case4__title'>что нам удалось</h4>
                                <ul className='case4__list'>
                                    <li className='case4__list-item'>Подготовили дизайн новой посадочной страницы</li>
                                    <li className='case4__list-item'>Сделали редизайн всего веб-приложения</li>
                                    <li className='case4__list-item'>Обновили мобильное приложение и дополнили его функционал</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className='case4-section'>
                        <div className='case4-result'>
                            <div className='case4-result__column'>
                                <h4 className='case4__title'>Работа над главной страницей</h4>
                                <p className='case4__content'>
                                    Мы с&nbsp;командой начали с&nbsp;самого сердца приложения — главной страницы.
                                    Старая страница не&nbsp;отвечала нуждам пользователей: главный экран показывал
                                    много нерелевантной информации, его нельзя было кастомизировать, а&nbsp;сам дизайн
                                    не&nbsp;был приятен в&nbsp;использовании. Как итог, многие клиенты
                                    переходили к&nbsp;конкурентам, чей интерфейс был гораздо понятнее и&nbsp;удобнее.
                                </p>
                            </div>
                            <div className='case4-result__column'>
                                <h4 className='case4__title'>результат</h4>
                                <ul className='case4__list'>
                                    <li className='case4__list-item'>Добавили возможность создания собственного дашборда</li>
                                    <li className='case4__list-item'>Сделали библиотеку виджетов</li>
                                    <li className='case4__list-item'>Добились чистого, современного и понятного дизайна</li>
                                </ul>
                            </div>
                        </div>
                        <img
                            className='case4-result__img img--full'
                            src={HomePageMock}
                            alt='singleOps home page mock' />
                    </section>
                    <section className='case4-section'>
                        <div className='case4-tables'>
                            <div className='case4-tables__column'>
                                <h4 className='case4__title'>таблицы</h4>
                                <p className='case4__content case4-tables__content'>
                                    В веб-приложении SingleOps, основной способ отображения информации — это таблицы.
                                    Однако из-за сложности старого интерфейса таблиц, пользователям было проще
                                    пользоваться Excel или другими приложениями для работы с&nbsp;данными.<br /><br />
                                    В&nbsp;новом дизайне мы улучшили читаемость и&nbsp;юзабилити, также добавили
                                    необходимые функции, такие как создание кастомного вида таблицы.
                                </p>
                                <div className='case4-points'>
                                    <div className='case4-point'>
                                        <span className='case4-point__title'>+34%</span>
                                        <span className='case4-point__content'>Прирост уникальных сессий</span>
                                    </div>
                                    <div className='case4-point'>
                                        <span className='case4-point__title'>+27%</span>
                                        <span className='case4-point__content'>Вовлечения юзеров в таблицы</span>
                                    </div>
                                </div>
                            </div>
                            <div className='case4-tables__column--right'>
                                <img className='img--full' src={SingleOpsTables} alt='singleOps tables' />
                            </div>
                        </div>
                    </section>

                    <section className='case4-section'>
                        <div className='case4-calendar'>
                            <div className='case4-calendar__column'>
                                <img className='img--full' src={SingleOpsCalendar} alt='singleOps calendar' />
                            </div>
                            <div>
                                <h4 className='case4__title'>календарь</h4>
                                <p className='case4__content case4-tables__content'>
                                    Календарь позволяет администраторам планировать время бригады и&nbsp;составлять
                                    расписание. Мы сделали структуру страницы чище и&nbsp;понятнее, засчет чего пользователи
                                    стали быстрее справляться с&nbsp;каждодневными задачами. Нам также удалось разгрузить
                                    время команды поддержки, которое они тратили на&nbsp;обучение клиентов работе
                                    с&nbsp;интерфейсом календаря.
                                </p>
                                <div className='case4-points'>
                                    <div className='case4-point'>
                                        <span className='case4-point__title'>-12%</span>
                                        <span className='case4-point__content'>Мискликов и&nbsp;Rage&nbsp;clicks</span>
                                    </div>
                                    <div className='case4-point'>
                                        <span className='case4-point__title'>-2 минуты</span>
                                        <span className='case4-point__content'>Сократилось время выполнения задачи</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='case4-section'>
                        <div className='case4-routes'>
                            <div>
                                <h4 className='case4__title'>планировщик маршрутов</h4>
                                <p className='case4__content case4-tables__content'>
                                    Планировщик позволяет отслеживать передвижения бригады в&nbsp;течение дня
                                    и&nbsp;находить наиболее оптимальные маршруты до&nbsp;места выполнения работы.<br /><br />
                                    Это был новый функционал, поэтому нам предстояло с&nbsp;нуля разработать
                                    интерфейс страницы, учитывая все бизнес-требования и&nbsp;потребности пользователей.
                                </p>
                            </div>
                            <div className='case4-routes__column'>
                                <img className='img--full' src={SingleOpsRoute} alt='singleOps routes' />
                            </div>
                        </div>
                    </section>

                    <section className='case4-section--last'>
                        <img className='img--full case4-mobile__img' src={SingleOpsMobileAppMock} alt='singleOps mobile app mock' />
                        <div className='case4-mobile'>
                            <h4 className='case4__title'>мобильное приложение</h4>
                            <p className='case4__content'>
                                Приложение было создано специально для сотрудников бригад, чтобы они могли быстро
                                находить свое расписание, маршруты на&nbsp;день и&nbsp;всю необходимую информацию
                                о&nbsp;заказе
                            </p>
                            <div className='case4-mobile__mocks'>
                                <img className='case4-mobile__mocks-img' src={mobileApp1Mock} alt='mobile app mock' />
                                <img className='case4-mobile__mocks-img' src={mobileApp2Mock} alt='mobile app mock' />
                                <img className='case4-mobile__mocks-img' src={mobileApp3Mock} alt='mobile app mock' />
                                <img className='case4-mobile__mocks-img' src={mobileApp4Mock} alt='mobile app mock' />
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