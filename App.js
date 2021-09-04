import React from 'react';
import { SafeAreaView, Text, View ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './Screens/MainScreen';
import CounterScreen from './Screens/CounterScreen';
import ApiScreen from './Screens/ApiScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';



const Stack = createNativeStackNavigator();


const App  =  () => {
  

  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Api" component={ApiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
