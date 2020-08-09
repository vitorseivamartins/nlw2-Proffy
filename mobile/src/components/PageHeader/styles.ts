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

    container: {
        padding: 40,
        // backgroundColor: '#8257e5',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    }
});

export default styles;