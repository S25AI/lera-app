import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../shared/assets/logo.svg';
import { Banner } from './components/Banner';
import { Footer } from '../../shared/components/Footer';
import { ContactsForm } from '../../shared/components/ContactsForm';
import { MainNavMenu } from '../../shared/components/MainNavMenu';

import redesignAppImg from './assets/desktop/portfolioTop1.jpg';
import bankGuaranteeAppImg from './assets/desktop/portfolioTop2.jpg';
import redesignDebtImg from'./assets/desktop/portfolioCenter1.jpg';
import singleOps from './assets/desktop/portfolioCenter2.jpg';
import travalignImg from './assets/desktop/portfolioBottom1.jpg';
import onlineSchoolImg from './assets/desktop/portfolioBottom2.jpg';
import horesImg from './assets/desktop/portfolioBottom3.jpg';

import webDesignIcon from './assets/desktop/services-star-icon.png';
import interfaceAppIcon from './assets/desktop/services-shape-icon.png';
import productDesignIcon from './assets/desktop/services-round-icon.png';
import designTeamIcon from './assets/desktop/services-cursor-icon.png';

import delimiterIcon from '../../shared/assets/delimiterBig.svg';
import arrowIcon from '../../shared/assets/arrow.svg';

import portfolioItemLaptop1 from './assets/laptop/portfolio1.jpg';
import portfolioItemLaptop2 from './assets/laptop/portfolio2.jpg';
import portfolioItemLaptop3 from './assets/laptop/portfolio3.jpg';
import portfolioItemLaptop4 from './assets/laptop/portfolio4.jpg';
import portfolioItemLaptop5 from './assets/laptop/portfolio5.jpg';
import portfolioItemLaptop6 from './assets/laptop/portfolio6.jpg';
import portfolioItemLaptop7 from './assets/laptop/portfolio7.jpg';

import closeIcon from './assets/closeIcon.svg';
import burgerIcon from './assets/burger.svg';

const portfolioItemsLaptop = [{
    src: portfolioItemLaptop1,
    alt: 'redeisign app'
}, {
    src: portfolioItemLaptop2,
    alt: 'bank guarantee'
}, {
    src: portfolioItemLaptop3,
    alt: 'redesign debt'
}, {
    src: portfolioItemLaptop4,
    alt: 'single ops'
}, {
    src: portfolioItemLaptop5,
    alt: 'travalign'
}, {
    src: portfolioItemLaptop6,
    alt: 'tetrika'
}, {
    src: portfolioItemLaptop7,
    alt: 'hores'
}];

const items = {
    top: [{
        src: redesignAppImg,
        href: '/lera-app/portfolio/case1',
        alt: 'redesign app'
    }, {
        src: bankGuaranteeAppImg,
        href: '/lera-app/portfolio/case2',
        alt: 'bank guarantee'
    }],
    medium: [{
        src: redesignDebtImg,
        href: '/lera-app/portfolio/case3',
        alt: 'redesign debt'
    }, {
        src: singleOps,
        href: '/lera-app/portfolio/case4',
        alt: 'single ops'
    }],
    bottom: [{
        src: travalignImg,
        href: '/lera-app/portfolio/case6',
        alt: 'travalign'
    }, {
        src: onlineSchoolImg,
        href: '/lera-app/portfolio/case5',
        alt: 'tetrika' 
    }, {
        src: horesImg,
        alt: 'hores'
    }]
};

const servicesItems = [{
    src: webDesignIcon,
    alt: 'web-design',
    title: 'Веб-дизайн',
    content: 'Быстро и качественно сделаем дизайн посадочной страницы, разработаем дизайн интернет-магазина, упакуем бизнес и оформим соц. сети'
}, {
    src: interfaceAppIcon,
    alt: 'interface and apps',
    title: 'Интерфейсы и приложения',
    content: 'Разработаем дизайн веб и мобильных приложений, а также проведем юзабилити тестирование существующих продуктов'
}, {
    src: productDesignIcon,
    alt: 'product design',
    title: 'Продуктовый дизайн',
    content: 'Поможем улучшить продуктовые метрики вашего IT-продукта, внедрим современные продуктовые процессы (Agile, Scrum) и создадим дизайн систему'
}, {
    src: designTeamIcon,
    alt: 'аутсорс дизайн-команда',
    title: 'аутсорс дизайн-команда',
    content: 'Станем частью вашей продуктовой команды и поможем справиться с большим объемом задач, выполняя работу так же качественно, как и люди в штате'
}];

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

const PortfolioRow = ({ items }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            {
                items.map(item => (
                    <div key={item.src} style={{ flexShrink: '0' }}>
                        <Link to={item.href}>
                            <img style={{ borderRadius: '16px' }} src={item.src} alt={item.alt} />                        
                        </Link>
                    </div>
                ))
            }
        </div>
    )
};

const MainPortfolio = () => {
    return (
        <section id='portfolio' className='main-portfolio'>
            <h2 className='main-portfolio__title'>наши работы</h2>
            <div className='main-portfolio__items'>
                <PortfolioRow items={items.top} />
                <PortfolioRow items={items.medium} />
                <PortfolioRow items={items.bottom} />
            </div>
            <div className='main-portfolio__items-laptop'>
                {
                    portfolioItemsLaptop.map(item => (
                        <img
                            className='main-portfolio__items-laptop-img'
                            key={item.src}
                            style={{ borderRadius: '16px' }}
                            src={item.src}
                            alt={item.alt} />
                    ))
                }
            </div>
        </section>
    );
};

const MainServicesItem = ({ item }) => {
    return (
        <div className='main-services-item'>
            <img
                width='60px'
                height='60px'
                className='main-services-item__img'
                src={item.src}
                alt={item.alt} />
            <h4 className='main-services-item__title'>{item.title}</h4>
            <p className='main-services-item__content'>{item.content}</p>
        </div>
    );
};

const MainServices = ({ items }) => {
    return (
        <section id='services' className='main-services'>
            <h2 className='main-services__title'>услуги</h2>                           
            <div className='main-services__items'>
                {
                    items.map(item => (
                        <MainServicesItem key={item.src} item={item} />
                    ))
                }
            </div>   
        </section>
    );
};

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

const Carousel = () => {
    return (
        <section className='carousel-container'>
            <div className='carousel'>
                <div className='carousel__items'>
                    <div>Продуктовый дизайн</div>
                    <img width='18px' height='25px' src={delimiterIcon} />
                    <div>Веб-дизайн</div>
                    <img src={arrowIcon} />
                    <div>Аутсорс дизайн команда</div>
                    <img width='18px' height='25px' src={delimiterIcon} />
                    <div>Проектирование интерфейсов</div>
                    <img src={arrowIcon} />
                    <div>Брендинг</div>
                    <img width='18px' height='25px' src={delimiterIcon} />
                    <div>Мобильное приложение</div>
                    <img src={arrowIcon} />
                </div>
                <div className='carousel__items'>
                    <div>Продуктовый дизайн</div>
                    <img width='18px' height='25px' src={delimiterIcon} />
                    <div>Веб-дизайн</div>
                    <img src={arrowIcon} />
                    <div>Аутсорс дизайн команда</div>
                    <img width='18px' height='25px' src={delimiterIcon} />
                    <div>Проектирование интерфейсов</div>
                    <img src={arrowIcon} />
                    <div>Брендинг</div>
                    <img width='18px' height='25px' src={delimiterIcon} />
                    <div>Мобильное приложение</div>
                    <img src={arrowIcon} />
                </div>
            </div>
        </section>
    );
};

export const Main = () => {
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
            <div class='main'>
                <div className='container'>
                    <Header openModal={openModal} />
                    <Banner />
                </div>
                    <Carousel />
                <div className='container'>
                    <MainPortfolio />
                    <MainServices items={servicesItems} />
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
    )
};