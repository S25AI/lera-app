import { useState } from 'react';
import successIcon from '../../assets/success.svg';
import './styles.css';

const Input = ({
    name,
    label,
    value,
    onChange,
    error,
    type='text'
}) => {
    let className = 'input-wrapper__input';

    if (error) {
        className = `${className} input-wrapper__input--error`;
    }

    return (
        <div className='input-wrapper'>
            <label className='input-wrapper__label' htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={className} />
            {
                error && (
                   <div className='input-wrapper__input-footer'>{error}</div> 
                )
            }
        </div>
    );
};

export const ContactsForm = () => {
    const [formData, setFormData] = useState({
        userName: {
            value: '',
            error: ''
        },
        userEmail: {
            value: '',
            error: ''
        },
        userPhone: {
            value: '',
            error: ''
        }
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: {
                ...prevFormData[name],
                value
            }}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const finalFormData = {
            userName: {
                value: formData.userName.value,
                error: ''
            },
            userEmail: {
                value: formData.userEmail.value,
                error: ''
            },
            userPhone: {
                value: formData.userPhone.value,
                error: ''
            }
        }

        let isFormError = false;
        
        if (!formData.userName.value.length) {
            finalFormData.userName.error = 'Пожалуйста, укажите имя';
            isFormError = true;
        }

        if (!formData.userEmail.value.length) {
            finalFormData.userEmail.error = 'Пожалуйста, укажите почту';
            isFormError = true;
        }

        if (!formData.userPhone.value.length) {
            finalFormData.userPhone.error = 'Пожалуйста, укажите телефон';
            isFormError = true;
        }

        if (isFormError) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                ...finalFormData
            }));
        } else {
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return (
            <section id='contacts' className='contacts-form'>
                <h2 className='contacts-form__title'>свяжитесь с&nbsp;нами</h2>
                <p className='contacts-form__content'>обсудим ваш проект&nbsp;и&nbsp;сроки</p>

                <div className='contacts-form-success'>
                    <img width='56px' hegiht='56px' src={successIcon} alt='success form' />
                    <div className='contacts-form-success__title'>
                        Спасибо за&nbsp;ваш запрос
                    </div>
                    <div className='contacts-form-success__content'>
                        Мы&nbsp;скоро&nbsp;с&nbsp;вами свяжемся и&nbsp;обсудим детали проекта
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id='contacts' className='contacts-form'>
            <h2 className='contacts-form__title'>свяжитесь с&nbsp;нами</h2>
            <p className='contacts-form__content'>обсудим ваш проект&nbsp;и&nbsp;сроки</p>
            <form onSubmit={handleSubmit}>
                <div className='contacts-form__controls'>
                    <Input
                        value={formData.userName.value}
                        error={formData.userName.error}
                        label='Имя'
                        onChange={handleChange}
                        name='userName' />
                    <Input
                        value={formData.userEmail.value}
                        error={formData.userEmail.error}
                        label='Почта'
                        onChange={handleChange}
                        name='userEmail' />
                    <Input
                        value={formData.userPhone.value}
                        error={formData.userPhone.error}
                        label='Телефон'
                        onChange={handleChange}
                        name='userPhone' 
                        type='tel' />
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