import { useRef } from 'react';
import './styles.css';

const Input = ({
    name,
    type='text'
}) => {
    return (
        <div className='input-wrapper'>
            <label className='input-wrapper__label' htmlFor={name}>{name}</label>
            <input type={type} id={name} name={name} className='input-wrapper__input' />
        </div>
    );
};

export const ContactsForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(Array.from(formRef.current.elements).map(el => `${el.name} - ${el.value}`));
    };

    const formRef = useRef(null);

    return (
        <section id='contacts' className='contacts-form'>
            <h2 className='contacts-form__title'>свяжитесь с&nbsp;нами</h2>
            <p className='contacts-form__content'>обсудим ваш проект&nbsp;и&nbsp;сроки</p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className='contacts-form__controls'>
                    <Input name='Имя' />
                    <Input name='Почта' />
                    <Input name='Телефон' type='tel' />
                    <div className='input-wrapper'>
                        <label className='input-wrapper__label' htmlFor='connect'>
                            Предпочтительный способ связи
                        </label>
                        <select className='contacts-form__select' id='connect' name='connect'>
                            <option value='telegram'>Telegram</option>
                            <option value='whatsapp'>WhatsApp</option>
                            <option value='Почта'>Почта</option>
                        </select>
                    </div>
                </div>
                <div className='contacts-form__footer'>
                    <button className='contacts-form__button' type='submit'>отправить запрос</button>
                </div>
            </form>
        </section>
    );
};