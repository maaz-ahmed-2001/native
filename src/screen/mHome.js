import React , {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet,KeyboardAvoidingView,TextInput,Button } from 'react-native';
import {auth,signInWithEmailAndPassword,signOut} from "../config/firebase";



export default function Login({navigation}) {
    
    return (
        <KeyboardAvoidingView  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} behavior='padding'
        
        >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:"#fff"}} >
            <View>
                <Text style={{fontWeight:"500",fontSize:"42px",color:"#000", margin:10}}>Verify via QR code</Text>
            </View>
            <View>
                <Text style={{fontWeight:"500",fontSize:"42px",color:"#000", margin:10}}>Verify via serial number</Text>
            </View>
            <Button
            title="Log Out"
            onPress={async()=>{
                await signOut(auth)
                localStorage.clear()
                navigation.navigate("Login")
            }}
            />
        </View>
        </KeyboardAvoidingView>

    );
}