import React , {useState,useEffect, useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/login';
import Signup from '../screen/signup';
import NeedyForm from '../screen/component/NeedyForm';
import mHome from '../screen/mHome';
import { onAuthStateChanged,auth,getDoc,db,doc } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { GlobalContext } from '../context/context';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
    const {state,dispatch} = useContext(GlobalContext)
    console.log("NAVIGATION")
    let [userRole,setUserRole]=useState("");
    useEffect(()=>{
        
        onAuthStateChanged(auth,async (user)=>{
            
            if (user){
                dispatch({type:"AUTH_USER",payload:authUser})
                await fetchUserInfo(user.uid);
                localStorage.setItem("id",user.uid);
                
            }
            else{
                console.log("user not found")   
                dispatch({type:"AUTH_USER",payload:null})
            }
        })
        
    },[])

    let fetchUserInfo = async (uid) => {
        
        let userRef = doc(db,"user",uid);
        let userInfo = await getDoc(userRef);
        console.log(uid)
        // signOut(auth)
        let userInfoData = userInfo.data();
        await setUserRole(userInfoData.role)
        console.log("NAVIGATION222222222",userInfoData.role,state.authUser)
    }
    return (
        
        
        <NavigationContainer>
            <Stack.Navigator>
                { userRole ?
                    <Stack.Screen options={{ headerShown: false }} name="NeedyForm" component={NeedyForm} />
                    :
                    <Stack.Screen options={{ headerShown: false }} name="mHome" component={mHome} />
                }
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
                

            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({

//     button: {
//         backgroundColor: '#0782F9',
//         width: '60%',
//         borderRadius: 10,
//         padding: 10,
//         alignItems: 'center',
//         // justifyContent:'center',
//         fontWeight: 'bold',


//     },
//     buttonOutline: {
//         backgroundColor: '#fff',
//         width: '60%',
//         borderRadius: 10,
//         padding: 10,
//         alignItems: 'center',
//         marginTop:10,
//         borderColor:'#0782F9',
//         borderWidth:2

//     },
//     input: {
//         width: 350,
//         height: 55,
//         backgroundColor: '#333',
//         margin: 10,
//         padding: 10,
//         color: 'white',
//         borderRadius: 14,
//         fontSize: 18,
//         fontWeight: '500',
//       },

// })