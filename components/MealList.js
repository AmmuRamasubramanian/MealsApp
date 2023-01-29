import { FlatList, View,StyleSheet } from "react-native"
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

function MealList({item}){
    const navigation=useNavigation();
    function renderMealsItem(itemData){
        const data=itemData.item;
        function pressHandler(){
            navigation.navigate("MealsDetails",{
                "mealId":itemData.item.id,
            });
        }
        const MealProps={
            title:data.title,
            imageUrl:data.imageUrl,
            duration:data.duration,
            affordability:data.affordability,
            complexity:data.complexity,
        }
        return (<MealItem {...MealProps} onpress={pressHandler}/>);
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={item}
            keyExtractor={(itemData)=>itemData.id}
            renderItem={renderMealsItem}
            />
        </View>
    )
}

export default MealList

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    }
})