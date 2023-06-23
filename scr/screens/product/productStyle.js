import { StyleSheet, Dimensions } from 'react-native'
import { color } from '../../database/database'

import { width } from '../../defaultStyle'

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
        paddingLeft: 16
    },

    backButton: {
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
        justifyContent: 'center',
        marginBottom: 16,
        marginTop: 32
    },

    productInfo: {
        paddingHorizontal: 16,
        marginTop: 6
    },

    shopping: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 14
    },

    shoppingIcon: {
        color: color.blue,
        marginRight: 6,
    },

    shoppingText: {
        fontSize: 12,
    },

    productName: {
        flexDirection: 'row',
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    productNameText: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 0.5,
        marginVertical: 4,
        maxWidth: '84%'
    },

    linkIcon: {
        color: color.blue,
        backgroundColor: color.blue + 10,
        padding: 8,
        borderRadius: 100
    },

    descriptionText: {
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 1,
        opacity: 0.5,
        lineHeight: 20,
        maxWidth: '85%',
        maxHeight: 44,
        marginBottom: 18
    },

    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 14,
        borderBottomColor: color.backgroundLight,
        borderBottomWidth: 1,
        paddingBottom: 20
    },

    locationPin: {
        color: color.blue,
        backgroundColor: color.backgroundLight,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 100,
        marginRight: 10
    },

    price: {
        fontSize: 18,
        fontWeight: '500',
        maxWidth: '85%',
        marginBottom: 4
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        height: '8%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    addButton: {
        width: '86%',
        height: '90%',
        backgroundColor: color.blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    addText: {
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 1,
        color: color.white,
        textTransform: "uppercase"
    }
})