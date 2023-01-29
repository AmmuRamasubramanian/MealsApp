import {View, Text, StyleSheet} from 'react-native'

function List({detailList}){
    return(
            detailList.map((item)=>
            <View style={styles.listContainer} key={item}>
            <Text style={styles.text}>{item}</Text>
            </View>
            )
    )
}

export default List;

const styles=StyleSheet.create({
    listContainer:{
        marginHorizontal:30,
        marginVertical:6,
        paddingHorizontal:8,
        paddingVertical:4,
        backgroundColor:'#4f0b43',
        borderRadius:20,
    },
    text:{
        textAlign:'center',
        fontSize:16,
        fontFamily:'poppinsregular',
        color:'#f7e9f7'
    },

})