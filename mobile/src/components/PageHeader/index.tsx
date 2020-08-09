import React, { ReactNode, useEffect, useState } from 'react';
import { View, Image, Text, AsyncStorage } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, headerRight, children}) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Landing');
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
                <View style={styles.topBar}>
                    <BorderlessButton onPress={handleGoBack}>
                        <Image source={backIcon} resizeMode="contain" />
                    </BorderlessButton>

                    <Image source={logoImg} resizeMode="contain" />
                </View>

                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    {headerRight}
                </View>

                {children}
            </View>      
        </View>      
    );
}

export default PageHeader;