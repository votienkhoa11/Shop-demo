import { View, Text, Image, FlatList, Animated } from 'react-native'
import React from 'react'
import productStyle from './ProductStyle';
import { width } from './ProductStyle';
import { color } from '../../database/database';

const scrollX = new Animated.Value(0);
const position =   Animated.divide(scrollX, width)

const renderProduct = ({item, index}) => {
  return (
    <View style={productStyle.productView}>
      <Image source={item} style={productStyle.imageProduct} />
    </View>
  )
}

const ListProductImage = ({product}) => {

  return (
    <View>
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
  )
}

export default ListProductImage