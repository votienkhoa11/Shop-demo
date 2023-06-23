import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import homeStyle from './homeStyle';

const ProductCard = ({data}) => {

    const navigation = useNavigation();

  return (
        <TouchableOpacity style={{width: '48%', marginVertical: 14,}}
            onPress={() => navigation.navigate("product", {productID: data.id})}>
            <View style={homeStyle.productCard}>
            {
                data.isOff ? (
                    <View style={homeStyle.isOff}>
                                <Text style={homeStyle.offText}>{data.offPercentage}%</Text>
                    </View>
                 ) : null
            }
            <Image source={data.productImage} style={homeStyle.imageView} />
            </View>
            <Text style={homeStyle.productName}>{data.productName}</Text>
            {data.category == 'accessory' ? data.isAvailable ? (
                <View style={homeStyle.isAval}>
                    <FontAwesome name = "circle" style={homeStyle.isAvalIcon} />
                    <Text style={homeStyle.isAvalText}>Available</Text>
                </View>
            ) : (
                    <View style={homeStyle.isAval}>
                        <FontAwesome name = "circle" style={homeStyle.isUnavalIcon} />
                        <Text style={homeStyle.isAvalText}>Unavailable</Text>
                    </View>
            ) : null}
            <Text>${data.productPrice}</Text>
        </TouchableOpacity>
        )        

}

export default ProductCard