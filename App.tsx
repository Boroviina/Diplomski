import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

import LoginScreen from './screens/LoginScreen';
import StartScreen from "./screens/StartScreen";
import SignUpScreen from "./screens/SignUpScreen";
import {useState} from "react";
import ReportProblemScreen from "./screens/ReportProblemScreen";
import Reviosion from "./screens/Reviosion";
import {AuthInit, AuthProvider, useAuth} from "./shared/contexts/auth-context";

const Stack = createNativeStackNavigator();


function AuthentificationScreens() {
    const {auth} = useAuth();


    return (<Stack.Navigator>
            {auth ? <>
                <Stack.Screen name={'Revision'} component={Reviosion}/>
            </> : <>
                <Stack.Screen name='StartScreen' component={StartScreen}/>
                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.Screen name='SignUp' component={SignUpScreen}/>
                <Stack.Screen name={'ReportProblem'} component={ReportProblemScreen}/>
            </>}
        </Stack.Navigator>
    )
}


export default function App() {
    return (
        <AuthProvider>
            <AuthInit>
                <NavigationContainer>
                    <AuthentificationScreens/>
                </NavigationContainer>
            </AuthInit>
        </AuthProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
