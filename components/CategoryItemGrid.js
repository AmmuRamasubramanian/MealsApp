import {View, Text, Pressable, StyleSheet, Platform} from 'react-native';

function CategoryItemGrid({title, color, onpress}){
    return(
        <View style={styles.maincontainer}>
            <Pressable 
            android_ripple={{color:'#ccc'}}
            style={({pressed})=>[styles.button, pressed? styles.buttonPressed : styles.null]}
            onPress={onpress}
            >
                <View style={[styles.innercontainer, {backgroundColor:color}]}>
                    <Text style={styles.textcontainer}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryItemGrid;

const styles=StyleSheet.create({
    maincontainer:{
        flex:1,
        margin:20,
        height:150,
        elevation:4,
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
        backgroundColor:'white',
        overflow:Platform.OS==='android'?'hidden':'visible',
    },
    buttonPressed:{
        opacity:0.5,
    },
    innercontainer:{
        flex:1,
        padding:16,
        alignItems:'center',
        borderRadius:8,
        justifyContent:'center',
    },
    button:{
        flex:1,
    },
    textcontainer:{
        fontFamily:'poppinsmedium',
        fontSize:18,
    }
})