import {Text, View, StyleSheet} from 'react-native'

function SubTitle({subtitle}){
    return(
        <View style={styles.detailContainer}>
                <Text style={styles.detailTitle}>{subtitle}</Text>
           </View>
    )
}

export default SubTitle;

const styles=StyleSheet.create({
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
})