import React , {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet,KeyboardAvoidingView,TextInput } from 'react-native';
import {auth,createUserWithEmailAndPassword,doc,setDoc,db} from "../config/firebase"



export default function Signup({navigation}) {
    let [userName,setUserName] = useState("");
    let [userEmail,setUserEmail] = useState("");
    let [userPass,setUserPass] = useState("");

    async function register(){
        
        let {user} = await createUserWithEmailAndPassword(auth,userEmail,userPass);
        let dataRef = doc(db,"user",user.uid);
        await setDoc(dataRef,{
            name:userName,
            email:userEmail,
            role:"user"
        })
        navigation.navigate("NeedyForm")
    }

    
    return (
        <KeyboardAvoidingView  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} behavior='padding'
        
        >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:"#fff"}} >
            <Text style={{fontWeight:"500",fontSize:"42px",color:"#000", margin:10}}>Create an account</Text>
        <TextInput
          style={styles.input}
          placeholder='Name'
          autoCapitalize="none"
          placeholderTextColor='gray    '
          keyboardType = 'text'
          onChangeText={(text)=>{setUserName(text)}}
        />
        
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='gray    '
          keyboardType = 'email-address'
          onChangeText={(text)=>{setUserEmail(text)}}
        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='grey'
          onChangeText={(text)=>{setUserPass(text)}}
        />
            <TouchableOpacity style={styles.button}  onPress={()=>{register()}}>
               
                <Text style={{fontSize:16,fontWeight:'bold',color:'#fff',}}>Register</Text>
            </TouchableOpacity>

            
            <Text style={{fontSize:18,fontWeight:'500',color:'#333'}}>Already have an account ? <Text style={{fontSize:18,fontWeight:"600",color:"blue",textDecorationLine:"underline",textDecorationColor:"blue"}} onPress={()=>{
                    navigation.navigate("Login")
                }}>Login</Text></Text>
            
            

        </View>
        </KeyboardAvoidingView>

    );
}


const styles = StyleSheet.create({

    button: {
        backgroundColor: 'green',
        width: '60%',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        // justifyContent:'center',
        fontWeight: 'bold',
        margin:20,


    },
    buttonOutline: {
        backgroundColor: '#fff',
        width: '60%',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginTop:10,
        borderColor:'#0782F9',
        borderWidth:2

    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: 'transparent',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        fontSize: 21,
        margin:20,
        fontWeight: '200',
        borderColor:"gray",
        borderWidth:1,
        
      },

})