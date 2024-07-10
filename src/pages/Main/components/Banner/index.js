import './styles.css';

export const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner__entry'>
                <h1 className='banner__title'>Студия<br />продуктового<br />и&nbsp;веб-дизайна</h1>
                <p className='banner__content'>
                    Дизайн как продуманное бизнес решение<br />для малых бизнесов и&nbsp;крупных корпораций
                </p>
                <button className='banner__button'>связаться с нами</button>
            </div>
        </div>
    );
};