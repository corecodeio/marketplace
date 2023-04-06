import React from 'react';
import Styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
//icons
import { BiMenu } from 'react-icons/bi';

const Navbar = ({ setMenu }) => {
    const navigate = useNavigate();

    return (
        <div className={Styles[`main`]}>
            <div className={Styles[`navbar`]}>
                <div className={Styles[`menu-left`]}>
                    <BiMenu className={Styles[`menu-mobile`]} onClick={() => setMenu(true)} />
                    <img
                        className={Styles[`logo`]}
                        src="/images/logo-app-dark.png"
                        alt="core code"
                        onClick={() => navigate('/dashboard')}
                    />
                </div>
                <div className={Styles[`menu-right`]}>
                    <p className={Styles[`logout`]} onClick={() => {}}>
                        Logout
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
