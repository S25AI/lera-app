import logo from '../../assets/logo.svg';
import { MainNavMenu } from '../MainNavMenu';
import './styles.css';

export const Footer = () => {
    return (
        <div className='footer'>
            <a href='/lera-app' alt='logo'>
                <img src={logo} alt='logo' />
            </a>
            <MainNavMenu />
        </div>
    );
};