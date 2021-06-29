import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import RosterHome from "../screens/RosterHome";
import RosterDetail from "../screens/RosterDetail";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Roster" component={RosterHome} options={{headerShown: false}}/>
        <MainStack.Screen name="RosterDetail" component={RosterDetail} options={{headerShown: false}}/>
    </MainStack.Navigator>
)

export default () => (
    <NavigationContainer>
        <MainStackScreen/>
    </NavigationContainer>
)