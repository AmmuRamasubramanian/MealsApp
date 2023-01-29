import { useLayoutEffect } from "react";
import MealList from "../components/MealList";
import { MEALS, CATEGORIES } from "../data/dummy-data";



function MealsOverviewScreen({route, navigation}){
    const catId=route.params.categoryId;
    const colorcode=route.params.colorCode;

    useLayoutEffect(()=>{
        const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title
        navigation.setOptions({
            title:categoryTitle,
        })
    },[catId, navigation]);

    const displayedMeals=MEALS.filter((mealitem)=>{
        return mealitem.categoryIds.indexOf(catId)>=0;
    })

    return <MealList item={displayedMeals}/>
    
}

export default MealsOverviewScreen;

