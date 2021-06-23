import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    label: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
    },

    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },

    select: {
        flexDirection: 'row',
        width: '100%', 
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',    
        paddingRight: 25,
        overflow: 'hidden',    
      },

    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,

    },

    selectBody: {
        flex: 1,
        alignItems: 'center',
    },

    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },

    column: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    divider: {
        marginRight: 4,
        fontSize: 15,
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text500,
    },

    caracterLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
    },

    footer: {
        paddingHorizontal: 24,
        marginVertical: 20,
        marginBottom: 56,

    }

});