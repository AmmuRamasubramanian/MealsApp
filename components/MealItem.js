import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native'
import MealDetails from './MealDetails';

function MealItem({imageUrl,title, duration, affordability, complexity, onpress}){
    return(
        <View style={styles.maincontainer}>
            <Pressable 
            android_ripple={{color:'#ccc'}} 
            style={({pressed})=>pressed? styles.buttonPressed:styles.null }
            onPress={onpress}
            >
                <View style={styles.innercontainer}>
                    <View>
                        <Image source={{uri:imageUrl}} style={styles.imageContainer}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>  
                </View>
            </Pressable> 
        </View>
    )
}

export default MealItem;

const styles=StyleSheet.create({
    maincontainer:{
        margin:14,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:4,
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
        backgroundColor:'white',
        overflow:Platform.OS==='android'?'hidden':'visible',
    },
    innercontainer:{
        borderRadius:8,
        overflow:'hidden',
    },
    imageContainer:{
        width:'100%',
        height:200,
    },
    title:{
        textAlign:'center',
        fontSize:18,
        margin:8,
    },
    buttonPressed:{
        opacity:0.5,
    },
})