import { Text, View ,StyleSheet,FlatList} from "react-native";
import MealList from "../components/MealList";
import { FavoriteContext } from "../favorite-stateContext/context/favorite-context";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen(){
    const favContextItems=useContext(FavoriteContext);
    
    const displayFavMeals=MEALS.filter((MealItem)=>favContextItems.ids.includes(MealItem.id))

    if(displayFavMeals.length===0){
        return(
            <View style={styles.container}>
                <Text style={styles.textcontainer}>No Favorite Meals added yet!</Text>
            </View>
        )
    }
    return <MealList item={displayFavMeals} />
}

export default FavoritesScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',  
    },
    textcontainer:{
        fontFamily:'poppinsmedium',
        fontSize:19,
    }
})