import { createContext , useState} from "react";

export const FavoriteContext=createContext({
    ids:[],
    addFavIds:(id)=>{},
    removeFavIds:(id)=>{}
});

function FavoriteProvider({children}){
    const[favMealIds, setFavMealIds]=useState([]);

    function addFavoriteMeal(id){
        setFavMealIds((currentMealIds)=>[...currentMealIds,id])
    }

    function removeFavoriteMeal(id){
        setFavMealIds((currentMealIds)=>currentMealIds.filter((mealid)=>mealid!==id))
    }

    const value={
        ids:favMealIds,
        addFavIds:addFavoriteMeal,
        removeFavIds:removeFavoriteMeal,
    }
    return(
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider;