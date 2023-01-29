import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons'; 
import FavoriteProvider from './favorite-stateContext/context/favorite-context';

const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();

function DrawerHandler(){
  return(<Drawer.Navigator screenOptions={{
    headerStyle:{backgroundColor:'#360a30'},
    headerTintColor:'white',
    sceneContainerStyle:{backgroundColor:'#f7e9f7'},
    drawerStyle:{backgroundColor:'#f7e9f7'},
    drawerActiveBackgroundColor:'#360a30',
    drawerActiveTintColor:'white',
    drawerInactiveTintColor:'#360a30', 
  }}>
    <Drawer.Screen name='Categories' component={CategoryScreen} options={{
     drawerIcon:({color,size})=>(
      <Ionicons name="list" size={size} color={color} />
     )
    }}/>
    <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
      drawerIcon:({color,size})=>(
        <Ionicons name="star" size={size} color={color} />
      )
    }}/>
  </Drawer.Navigator>)
}

export default function App() {
  const [loaded]=useFonts({
    poppinsregular:require('./assets/fonts/Poppins-Regular.ttf'),
    poppinsmedium:require('./assets/fonts/Poppins-Medium.ttf'),
    poppinsitalic:require('./assets/fonts/Poppins-Italic.ttf'),
    poppinsmediumItalic:require('./assets/fonts/Poppins-MediumItalic.ttf'),
  })
  if(!loaded){
    return null;
  }
 
  return (
    <>
    <StatusBar style='light'/>
    <FavoriteProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle:{backgroundColor:'#f7e9f7'},
        headerStyle:{backgroundColor:'#360a30'},
        headerTintColor:'white'
      }}>
        <Stack.Screen 
        name='Drawer' 
        component={DrawerHandler}
        options={{
         headerShown:false,
        }}/>
        <Stack.Screen 
        name="MealsOverview" 
        component={MealsOverviewScreen}
        />
        <Stack.Screen name='MealsDetails' component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoriteProvider>
    </>
  );
}

const styles = StyleSheet.create({
});
