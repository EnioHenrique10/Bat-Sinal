import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Registrar } from "../components/Registrar";
import { Home } from "../screens/Home";



type AuthRoutes = {
    registrar: undefined;
    home: undefined;
} 

export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<AuthRoutes>


const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();


export function AuthRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
             name="home"
             component={Home}
            />

         <Screen 
             name="registrar"
             component={Registrar}
             
            />
        </Navigator>
    )
}


