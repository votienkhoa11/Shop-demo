import { ScrollView, Text, TouchableOpacity, View, StatusBar, FlatList, Animated,
        Image, ToastAndroid } from 'react-native'
import * as React from 'react'
import { useEffect, useState } from 'react'
import Location from './Location';
import AsyncStorage from '@react-native-async-storage/async-storage';

//icon
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//style
import { color } from '../../database/database';
import productStyle from './productStyle';
import { width } from '../../defaultStyle';

//data
import { Items } from '../../database/database';

const IndexProduct = ({route, navigation}) => {
  //get id of the product from the home screen
  const {productID} = route.params;

  const [product, setProduct] = useState({});

  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, width);

  //get information of the product
  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index ++) {
      if(Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  //render image of the product
  const renderProduct = ({item, index}) => {
    return (
      <View style={productStyle.productView}>
        <Image source={item} style={productStyle.imageProduct} />
      </View>
    )
  }

  //add to cart function
  const addToCart = async (id) => {
    let itemJSONArray = await AsyncStorage.getItem('cartItems');
    console.log(itemJSONArray);

    if(itemJSONArray) {
        let itemArray = JSON.parse(itemJSONArray)
        let array = itemArray;
        array.push(id);

        try {
            await AsyncStorage.setItem('cartItems', JSON.stringify(array));
            
            navigation.navigate('home');
            //ToastAndroid.show('Item added successfully to your cart.') error Toast, to be fixed later
        } catch (error) {
            console.log(error)
        }
    } else {
        let array = [];
        array.push(id);

        try {
            await AsyncStorage.setItem('cartItems', JSON.stringify(array));

            navigation.navigate('home');
            //ToastAndroid.show('Item added successfully to your cart.')
        } catch (error) {
            console.log(error)
        }
    }
}

  useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
          getDataFromDB();  
      });
      
      return unsubscribe;
  }, [navigation])


  return (
    <View style={productStyle.container}>
      <StatusBar backgroundColor={color.backgroundLight} />
      <ScrollView>
        <View style={productStyle.scrollView}>
          <View style={productStyle.container2}>
            {/*Back button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name='chevron-left' style={productStyle.backButton} size={18} />
            </TouchableOpacity>
          </View>

          {/*Image review using Flatlist*/}
          <FlatList  
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x:scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          {/*Animation view bar*/}
          <View style={productStyle.container3}>
            {
              product.productImageList ?
              product.productImageList.map((data, index) => {
              let opacity = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'clamp'
              });
              return (
                <Animated.View
                  key={index}
                  style={{
                    width: '16%',
                    height: 2.4,
                    backgroundColor: color.black,
                    opacity,
                    marginHorizontal: 4,
                    borderRadius: 100
                  }}
                ></Animated.View>
              )
              })
              : null
            }
          </View>
        </View>
        {/*Product information*/}
        <View style={productStyle.productInfo}>
            <View style={productStyle.shopping}>
              <Entypo name="shopping-cart" style={productStyle.shoppingIcon} size={18}/>
              <Text style={productStyle.shoppingText}>Shopping</Text>
            </View>
            <View style={productStyle.productName}>
              <Text 
                style={productStyle.productNameText}>
                {product.productName}</Text>
              <Ionicons name='link-outline' style={productStyle.linkIcon} size={24} />
            </View>
            <Text style={productStyle.descriptionText}>
              {product.description}
            </Text>
            {/*Location*/}
            <Location />
        </View>
        <View style={{paddingHorizontal: 16,}}>
          <Text style={productStyle.price}>${product.productPrice}</Text>
        </View>
      </ScrollView>
      <View style={productStyle.buttonContainer}>
          <TouchableOpacity
            onPress={() => 
              (product.isAvailable ? addToCart(product.id) : null)
            }
            style={productStyle.addButton}
            >
            <Text style={productStyle.addText} >
              {product.isAvailable ? 'Add to cart' : 'Not Avalable'}
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default IndexProduct