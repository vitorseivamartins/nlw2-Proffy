import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo.svg';
import backLogo from '../../assets/images/icons/back.svg';

import './styles.css'; //teste

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const [isdarkTheme] = useState(getInitialTheme);
    function getInitialTheme() {
        const isSavedThemeDark = localStorage.getItem('dark');
        return isSavedThemeDark != null ? JSON.parse(isSavedThemeDark) : false;
    }

    return (
        <div id={isdarkTheme? "dark-theme" : "light-theme"}>
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backLogo} alt="Voltar"/>
                    </Link>
                    <img src={logoImage} alt="Proffy"/>
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    {props.description && <p>{props.description}</p>}
                    
                    {props.children}
                </div>               
            </header>
        </div>
    );       
}

export default PageHeader;