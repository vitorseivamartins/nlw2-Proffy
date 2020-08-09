import React, { useState, useEffect } from 'react';
import { View, Image, Text  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RectButton, Switch } from 'react-native-gesture-handler';
import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

function Landing() {
    //const navigation = useNavigation();
    const { navigate } = useNavigation();
    const [isdarkTheme, setDarkTheme] = useState (false);
    const [totalConnection, setTotalConnections] = useState(0);

    const toggleSwitch = () => {
        AsyncStorage.setItem("dark", JSON.stringify(!isdarkTheme));
        setDarkTheme(!isdarkTheme);       
    }

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);    
        });        

        getInitialTheme().then(initialTheme => {
            setDarkTheme(initialTheme);
        });
    }, []);

    async function getInitialTheme() {
        const isSavedThemeDark = await AsyncStorage.getItem("dark");
        return (isSavedThemeDark != null) ? JSON.parse(isSavedThemeDark) : false;
    }

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }

    return (
        <View style={isdarkTheme? styles.darkTheme : styles.lightTheme}>
            <View style={styles.container}> 
                <Image 
                    source={landingImg} 
                    style={styles.banner}
                />

                <Text style={styles.title}>
                    Seja bem-vindo, {'\n'}
                    <Text style={styles.titleBold}>O que deseja fazer?</Text>
                </Text>

                <View style={styles.buttonsContainer}>

                    <RectButton 
                        onPress={handleNavigateToStudyPages}
                        style={[styles.button, styles.buttonPrimary]}
                    >
                        <Image source={studyIcon} />

                        <Text style={styles.buttonText}>Estudar</Text>
                    </RectButton>

                    <RectButton 
                        onPress= {handleNavigateToGiveClassesPage} 
                        style={[styles.button, styles.buttonSecondary]}
                    >
                        <Image source={giveClassesIcon} />

                        <Text style={styles.buttonText}>Dar aulas</Text>
                    </RectButton>
                    
                </View>

                <Text style={styles.totalConnections} >              
                    Total de {totalConnection} conexões já realizadas {' '}
                    <Image source={heartIcon} />
                </Text>

                <View style={styles.themeToogle}>
                    <Text style={styles.themeToogleText}>{isdarkTheme? "Tema escuro" : "Tema claro"}</Text>  
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isdarkTheme ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isdarkTheme}
                    />
                </View>
              
            </View>        
        </View>        
    );
}

export default Landing;