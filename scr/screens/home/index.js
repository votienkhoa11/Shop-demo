import * as React from 'react';
import { Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { color } from '../../database/database';
import { Entypo } from '@expo/vector-icons'; 

import ProductCard from './ProductCard';
import { Items } from '../../database/database';
import homeStyle from './homeStyle';

const IndexHome = ({navigation}) => {

    const [product, setProducts] = useState([]);
    const [accessory, setAccessories] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();  
        });
      
        return unsubscribe;
    }, [navigation])

    //get data 
    const getDataFromDB = async () => {
        let productList = [];
        let accessoryList = [];

        for (let index = 0; index < Items.length; index ++){
            if(Items[index].category == 'product') {
                productList.push(Items[index])
            }else if (Items[index].category == 'accessory') {
                accessoryList.push(Items[index])
            }
        }
        setProducts(productList);
        setAccessories(accessoryList);
    }

  return (
    <View style={homeStyle.container}>
        <StatusBar backgroundColor={color.white} barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={homeStyle.scrollView}>
                <TouchableOpacity >
                    <Entypo name='shopping-bag' style={homeStyle.shoppingBagIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('mycart')}>
                    <Entypo name='shopping-cart' style={homeStyle.cart} />
                </TouchableOpacity>
            </View>
            <View style={homeStyle.textView}>
                <Text style={homeStyle.shopText}>Meu Shop</Text>
                <Text style={homeStyle.descriptionText}>Products Shop on 03, Song Thao str, Tan Binh district.
                    {'\n'}This shop offers both products and services</Text>
            </View>

            <View style={homeStyle.container2}>
                <View style={homeStyle.productView}>
                    <Text style={homeStyle.categories}>Products</Text>
                    <Text style={homeStyle.numberProducts}>41</Text>
                </View>
                <Text style={homeStyle.seeAll}>See all</Text>
            </View>

            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-around'}}>
                {
                    product.map(data => {
                        return <ProductCard data={data} key = {data.id} />
                    })
                }
            </View>
            <View style={homeStyle.container2}>
                <View style={homeStyle.productView}>
                    <Text style={homeStyle.categories}>Accessories</Text>
                    <Text style={homeStyle.numberProducts}>60</Text>
                </View>
                <Text style={homeStyle.seeAll}>See all</Text>
            </View>

            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-around'}}>
                {
                    accessory.map(data => {
                        return <ProductCard data={data} key = {data.id} />
                    })
                }
            </View>
        </ScrollView>
    </View>
  )
}

export default IndexHome