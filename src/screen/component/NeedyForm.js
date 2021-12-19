import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Text,Picker,Dimensions } from "react-native";
import {auth,db,doc,setDoc} from "../../config/firebase"
// import MapView from 'react-native-maps';


export default function NeedyForm({navigation}) {
  const [userName, setUserName] = useState("");
  const [fatherName,setFatherName] = useState("");
  const [cnic, setCnic] = useState("");
  const [dob,setDob] = useState("")
  const [members,setMembers] = useState("")
  const [income,setIncome] = useState("")
  const [help,setHelp] = useState("")



  const request = async () => {
    let dataRef = doc(db,"requests",state.authUser.uid);
        await setDoc(dataRef,{
            name:userName,
            fatherName,
            cnic,
            dob,
            members,
            income,
            help,
            
        })
        
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Request</Text>
      {/* <View style={styles.container}>
        <MapView style={styles.map} />
      </View> */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setUserName(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Father Name"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setFatherName(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="cnic"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setCnic(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="DD-MM-YY"
        autoCapitalize="none"
        keyboardType="number-pad"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setDob(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Family members"
        autoCapitalize="none"
        keyboardType="number-pad"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setMembers(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Monthly Income"
        autoCapitalize="none"
        placeholderTextColor="white"
        keyboardType="number-pad"
        onChangeText={(text) => {
          setIncome(text);
        }}
      />

<Picker
        // selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setHelp(itemValue)}
      >
        <Picker.Item label="Montly" value="monthly" />
        <Picker.Item label="Daily 1 time" value="1 time" />
        <Picker.Item label="Daily 2 time" value="2 time" />
        <Picker.Item label="Daily 3 time" value="3 time" />
      </Picker>

      <Button
        title="Submit request"
        onPress={() => {
          request();
        }}
      />
      <Button
      title="Log Out"
      onPress={async()=>{
        await signOut(auth)
        localStorage.clear()
        navigation.navigate("Login")
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 40,
    backgroundColor: "#333",
    margin: 10,
    padding: 10,
    color: "white",
    borderRadius: 14,
    fontSize: 16,
    fontWeight: "500",
  },
  text: {
    fontSize: 40,
    color: "#333",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  
});
