import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    lightTheme: {
        color: '#000',
        backgroundColor: '#8257E5',
        flex: 1,
        justifyContent: 'center',
    },
    
    darkTheme: {
        color: '#FFF',
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
    },

    toogleText: {
        maxWidth: 140,
        marginTop: 40,
    },

    container: {
        flex: 1,
        // backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04d361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    },

    themeToogle: {   
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'flex-start',
    },

    themeToogleText: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',     
    }
});

export default styles;