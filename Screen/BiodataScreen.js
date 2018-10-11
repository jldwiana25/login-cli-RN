import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

class BiodataScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

          <StatusBar
          barStyle="light-content"
          />

          <View style={styles.logoContainer}>

           <Image
       style={styles.logo}
       source={require('E:/Telkom_Scools/XI_RPL_2/KK-4/project_login/Screen/Image/mee.jpg')}
       />


          <TextInput
          placeholder="JULIA DWIANA"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />

          <TextInput
          placeholder="Banyumas,25 Januari 2002"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />

          <TextInput
          placeholder="SMK Telkom Purwokerto"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />

           <TextInput
          placeholder="Islam"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />
          

          <TouchableOpacity style={styles.buttonContainer}>

          <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('WelcomeScreen')}>Exit</Text>
          </TouchableOpacity>
          </View>
          </View>
    );
  }
} 

export default BiodataScreen;


const styles = StyleSheet.create({
 
  container: {

      padding: 30,
      backgroundColor:'#009688',
      flex: 1,
    alignItems: 'center',


  },
  input:{
    height:40,
    width:300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:10,
    marginTop:20,
    color: '#FFF',
    paddingHorizontal:10,
    fontWeight:'bold'
  },
  buttonContainer:{
    backgroundColor:'#00695c',
    paddingVertical:15,
    marginBottom:10,
    width: 300,
    justifyContent: 'flex-end'
  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700',    
  },
  logo:{

    width:150,
    height:150
    
  },  
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center'

  },
 
});
