import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import IndexHome from './scr/screens/home/index';
import IndexProduct from './scr/screens/product/index';
import IndexMyCart from './scr/screens/myCart/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}} >
        <Stack.Screen name = 'home' component={IndexHome} />
        <Stack.Screen name = 'mycart' component={IndexMyCart} />
        <Stack.Screen name = 'product' component={IndexProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}