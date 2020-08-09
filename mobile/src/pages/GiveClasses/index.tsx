import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    const [isdarkTheme, setDarkTheme] = useState (false);
    useEffect(() => {
        getInitialTheme().then(initialTheme => {
            setDarkTheme(initialTheme);
        });
    }, []);

    async function getInitialTheme() {
        const isSavedThemeDark = await AsyncStorage.getItem("dark");
        return (isSavedThemeDark != null) ? JSON.parse(isSavedThemeDark) : false;
    }


    return (
        <View style={isdarkTheme? styles.darkTheme : styles.lightTheme}>
            <View style={styles.container}>
                <ImageBackground 
                    resizeMode="contain" 
                    source={giveClassesBgImage} 
                    style={styles.content}
                >
                    <Text style={styles.title}>Quer ser um Proffy?</Text>
                    <Text style={styles.description}>
                        Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                    </Text>
                </ImageBackground>

                <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                    <Text style={styles.okButtonText} >Tudo bem</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default GiveClasses;