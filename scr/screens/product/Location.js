import { View, Text } from 'react-native'
import React from 'react'

//style
import { color } from '../../database/database';
import productStyle from './productStyle';
//icon
import { Entypo } from '@expo/vector-icons';

const Location = () => {
  return (
    <View style={productStyle.location}>
        <View style={{
            flexDirection: 'row',
            width: '80%',
            alignItems: 'center'
            }}>
            <View style={productStyle.locationPin}>
                <Entypo name='location-pin' size={16} color={color.blue} />
            </View>
            <Text>Meu Shop, 03 Song Thao street {'\n'}Tan Binh District, Ho Chi Minh city</Text>
        </View>
        <Entypo name='chevron-right' size={22} color={color.backgroundDark} />
    </View>
  )
}

export default Location