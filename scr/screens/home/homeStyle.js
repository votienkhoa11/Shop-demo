import { StyleSheet } from "react-native";
import { color } from "../../database/database";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: color.white,
    },

    scrollView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },

    shoppingBagIcon: {
        fontSize: 18,
        color: color.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        backgroundColor: color.backgroundLight,
    },
    
    cart: {
        fontSize: 18,
        color: color.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: color.backgroundLight,
    },

    textView: {
        marginBottom: 10,
        padding: 16
    },

    shopText: {
        fontSize: 26,
        color: color.black,
        fontWeight: '500',
        letterSpacing: 1,
        marginBottom: 10,
    },

    descriptionText: {
        fontSize: 14,
        color: color.black,
        fontWeight: '400',
        letterSpacing: 1,
        lineHeight: 24,
    },

    container2: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    productView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    categories: {
        fontSize: 18,
        color: color.black,
        fontWeight: '500',
        letterSpacing: 1,
    },

    numberProducts: {
        fontSize: 14,
        color: color.black,
        fontWeight: '400',
        marginLeft: 10,
    },

    seeAll: {
        fontSize: 14,
        color: color.blue,
        fontWeight: '400',
        opacity: 0.5,
        marginLeft: 10,
    },

    productCard: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: color.backgroundLight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    },

    isOff: {
        position: 'absolute',
        width: '20%',
        height: '24%',
        backgroundColor: color.green,
        top: 0,
        left: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    offText: {
        fontSize: 12,
        color: color.white,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

    imageView: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },

    productName: {
        fontSize: 12,
        color: color.black,
        fontWeight: '600',
        marginBottom: 2
    },

    isAval: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    isAvalIcon: {
        fontSize: 12,
        marginRight:6,
        color: color.green
    },

    isAvalText: {
        fontSize: 12,
        color: color.backgroundMedium
    },

    isUnavalIcon: {
        fontSize: 12,
        marginRight:6,
        color: color.red
    },
})