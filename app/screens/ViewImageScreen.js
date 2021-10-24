import React from 'react'
import { View, StyleSheet,StatusBar,Image } from 'react-native'
//convection to seperate local libraries
import colors from '../config/colors'

const ViewImageScreen = () => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.boxesContainer}>
                    <View  style={styles.redboxContainer}></View>
                    <View style={styles.greenboxContainer}></View>
            </View>
            <Image resizeMode='contain' source= {require('../assets/chair.jpg')} style={styles.imageContainer} />
        </View>
    )
}
export default ViewImageScreen

const styles= StyleSheet.create({
    viewContainer:{
        paddingTop:Platform.OS==="android"? StatusBar.currentHeight:0,
        backgroundColor:colors.background,
        flex:1,
        flexDirection:'column',

    },
    boxesContainer:{
           
            width:'100%',
            height:110,
            flexDirection:'row',
            justifyContent:'space-between'
            
    },
    redboxContainer:{
                backgroundColor:colors.primary,
                height:50,
                width:50,
                top:25,
                left:25,
        },
    greenboxContainer:{
            backgroundColor:colors.secondary,
            height:50,
            width:50,
            top:25,
            right:25,

        },
 
    imageContainer:{
        
        width:'100%',
        height:600
    },

})


