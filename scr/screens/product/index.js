import { ScrollView, Text, TouchableOpacity, View, StatusBar, FlatList, Animated } from 'react-native'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { color } from '../../database/database';

import { Items } from '../../database/database';
import productStyle from './ProductStyle';
import ListProductImage from './ListProductImage';

const IndexProduct = ({route, navigation}) => {
  const {productID} = route.params;

  const [product, setProduct] = useState({});

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index ++) {
      if(Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

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
            <TouchableOpacity>
              <Entypo name='chevron-left' style={productStyle.backButton} size={18} />
            </TouchableOpacity>
          </View>

          {/*Image review using Flatlist*/}
          <ListProductImage product={product} />
          
        </View>
      </ScrollView>
    </View>
  )
}

export default IndexProduct