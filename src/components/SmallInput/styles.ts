import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.heading,
        fontSize: 13,
        marginRight: 4,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.secondary50,
        textAlign: 'center',
    },
});