import { StyleSheet, Dimensions } from 'react-native'
import { color } from '../../database/database'

export const width = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: color.white,
        position: 'relative',
    },

    scrollView: {
        width: '100%',
        backgroundColor: color.backgroundLight,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4
    },

    container2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingLef: 16
    },

    backButton: {
        fontSize: 18,
        color: color.backgroundDark,
        padding: 12,
        backgroundColor: color.white,
        borderRadius: 10,
    },

    productView: {
        width: width,
        height: 240,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imageProduct: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    container3: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
})