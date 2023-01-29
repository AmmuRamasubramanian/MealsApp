import {View, Text, StyleSheet} from 'react-native';

function MealDetails({duration, complexity, affordability}){
    return(
        <View style={styles.innerContainer}>
                <Text style={styles.detailText}>{duration}m</Text>
                <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
           </View>
    )
}

export default MealDetails;

const styles=StyleSheet.create({
    innerContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:8,
    },
    detailText:{
        marginHorizontal:8,
        fontFamily:'poppinsregular',
        fontSize:14,
    }
})