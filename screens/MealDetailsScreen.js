import { useLayoutEffect } from 'react';
import {Text, StyleSheet, View, Image, ScrollView, Button} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetails/SubTitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';
import { useContext } from 'react';
import { FavoriteContext } from '../favorite-stateContext/context/favorite-context';

function MealDetailsScreen({route, navigation}){
    const favMealContext=useContext(FavoriteContext);

    const mealItemId=route.params.mealId;
    const displayedMealDetails=MEALS.find((meal)=>meal.id===mealItemId)

    const isFavMealId=favMealContext.ids.includes(mealItemId);

    function buttonPressHandler(){
        if (isFavMealId){
            favMealContext.removeFavIds(mealItemId)
        }else{
            favMealContext.addFavIds(mealItemId)
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton 
                onpress={buttonPressHandler} 
                name={isFavMealId?'star':'star-outline'}
                />
            }
        })
    },[navigation,buttonPressHandler])
    return(
        <ScrollView style={styles.screen}>
           <Image source={{uri:displayedMealDetails.imageUrl}} style={styles.imageContainer}/>
           <Text style={styles.title}>{displayedMealDetails.title}</Text>
           <MealDetails 
           duration={displayedMealDetails.duration}
           complexity={displayedMealDetails.complexity}
           affordability={displayedMealDetails.affordability}
           />
           <View style={styles.outerListContainer}>
            <View style={styles.innerListContainer}>
                <SubTitle subtitle='Ingredients'/>
                <List detailList={displayedMealDetails.ingredients}/>
                <SubTitle subtitle='steps'/>
                <List detailList={displayedMealDetails.steps}/>
            </View>
           </View>
        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles=StyleSheet.create({
    screen:{
        marginBottom:30,
    },
    imageContainer:{
        width:'100%',
        height:350,
    },
    title:{
        fontFamily:'poppinsmedium',
        fontSize:22,
        textAlign:'center',
        color:'#4f0b43',
        margin:8,
    },
    detailTitle:{
        textAlign:'center',
        fontSize:18,
        fontFamily:'poppinsmediumItalic',
        color:'#4f0b43',
        
    },
    detailContainer:{
        padding:6,
        borderBottomWidth:1,
        marginHorizontal:30,
        marginVertical:6,
        borderBottomColor:'#4f0b43'
    },
    innerListContainer:{
        width:'100%',
    },
    outerListContainer:{
        alignItems:'center'
    }

})