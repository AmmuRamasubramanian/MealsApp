import { CATEGORIES } from "../data/dummy-data";
import {FlatList} from 'react-native';
import CategoryItemGrid from "../components/CategoryItemGrid";

function CategoryScreen({navigation}){
    function rendercategoryitem(itemData){
        function pressHandler(){
            navigation.navigate("MealsOverview",{
                "categoryId":itemData.item.id,
                "colorCode":itemData.item.color
            });
        }
        return <CategoryItemGrid 
        title={itemData.item.title}
        color={itemData.item.color} 
        onpress={pressHandler}
        />
    }
    return(
        <FlatList
        data={CATEGORIES}
        keyExtractor={(item)=>item.id}
        renderItem={rendercategoryitem}
        numColumns={2}
        />
    )
}

export default CategoryScreen;