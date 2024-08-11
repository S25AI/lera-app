import arrowIcon from './assets/arrow.svg';
import './styles.css';

export const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner__entry'>
                <h1 className='banner__title'>Студия<br />продуктового<br />и&nbsp;веб-дизайна</h1>
                <p className='banner__content'>
                    Дизайн как продуманное бизнес решение<br />для малых бизнесов и&nbsp;крупных корпораций
                </p>
                <a href='#contacts'>
                    <button className='banner__button'>
                        <span>связаться с нами</span>
                        <img src={arrowIcon} width='22px' height='22px' alt='arrow' />
                    </button>
                </a>
            </div>
        </div>
    );
};