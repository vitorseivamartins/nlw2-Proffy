import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

import logoImage from '../../assets/images/logo.svg';
import landingImage from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

function Landing() {
    const [totalConnection, setTotalConnections] = useState(0);
    const [isdarkTheme, setDarkTheme] = useState(getInitialTheme);

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);

            localStorage.setItem("dark", JSON.stringify(isdarkTheme));
        })
    }, [isdarkTheme]);

    function getInitialTheme() {
        const isSavedThemeDark = localStorage.getItem('dark');
        return isSavedThemeDark != null ? JSON.parse(isSavedThemeDark) : false;
    }

    return (
        <div id={isdarkTheme? "dark-theme" : "light-theme"}>
            <div id="page-landing" >            
                <div id="page-landing-content" className="container">
                    <div className="logo-container">
                        <img 
                            src={logoImage} 
                            alt="Proffy"
                        />
                        <h2>Sua plataforma de estudos online.</h2>
                    </div>

                    <img 
                        src={landingImage} 
                        alt="Plataforma de estudos" 
                        className="hero-image"
                    />

                    <div className="buttons-container">
                        <Link to="study" className="study">
                            <img src={studyIcon} alt="Estudar"/>
                            Estudar
                        </Link>
                        <Link to="give-classes" className="give-classes">
                            <img src={giveClassesIcon} alt="Dar aulas"/>
                            Dar aulas    
                        </Link>
                    </div>

                    <div className="right-bottom">
                        <span className="total-connections">
                            Total de { totalConnection } conexões já realizadas
                            <img src={purpleHeartIcon} alt="Coração roxo"/>
                        </span>

                        <span className="theme-toogle">               
                            <BootstrapSwitchButton                                
                                checked={isdarkTheme} 
                                offstyle="light" style="border"
                               
                                onlabel="Tema escuro"
                                offlabel="Tema claro"
                                
                                onChange={() => {setDarkTheme(!isdarkTheme) }}
                            />
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Landing;