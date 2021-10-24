
import React from 'react'
import { View, Text, StyleSheet, Image, Platform, StatusBar, ImageBackground, Button } from 'react-native'

const WelcomeScreen = () => {
    return (
        <ImageBackground
                //set the dimension of the image
            style={styles.parentContainer}
            source={require('../assets/background.jpg')}
            resizeMode="cover" >

            

                        <Image source= {require('../assets/logo-red.png')} style={styles.logoContainer} />
                        <Text style={styles.textContainer}>Sell what you don't need</Text>

                        <View  style={styles.loginContainer}></View>
                        <View style={styles.registerContainer}></View>
                        

            
        </ImageBackground>
            
           

     

        
    )
}

const styles= StyleSheet.create({
    parentContainer:{
        
        paddingTop:Platform.OS==="android"? StatusBar.currentHeight:0,
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        
    },

    loginContainer:{
            
           height:40,
           width:'100%' ,
           backgroundColor:'#fc5c65',
           position:'absolute',
           bottom:40

            

    },

    registerContainer:{
       height:40,
       width:'100%',
       backgroundColor: '#4ECDC4',
       position:'absolute',
       bottom:0


    },
    logoContainer:{
        height:50,
        width:50,
        top:80
    },

    textContainer:{
        top:100,
    }



})

export default WelcomeScreen
