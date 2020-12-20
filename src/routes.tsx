import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Call from './pages/listCalls';
import Message from './pages/listMessages';
import Status from './pages/listStatus';

const Stack = createStackNavigator();
const Tabs = createMaterialTopTabNavigator();

const TabsScreen = () => {
    return(
        <Tabs.Navigator
            sceneContainerStyle={{
                backgroundColor: '#101e29'
            }}
            tabBarOptions ={{
                labelStyle:{
                    fontWeight: 'bold'
                },
                indicatorStyle: {
                    backgroundColor: '#2baba4',
                },  
                style:{
                    backgroundColor: '#212c32',
                    elevation: 2
                },
                activeTintColor: '#2baba4',
                inactiveTintColor: '#9d9d9e',
                
            }}
            
        >
            <Tabs.Screen name="message" component={Message} />
            <Tabs.Screen name="status" component={Status} />
            <Tabs.Screen name="call" component={Call} />
        </Tabs.Navigator>
    )
}

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                cardStyle:{
                    backgroundColor: '#101e29'
                },
                headerStyle:{
                    backgroundColor: '#212c32',
                    borderBottomWidth: 0,
                    elevation: 0
                },
                headerTitleStyle:{
                    color: '#9d9d9e',
                    fontSize: 28,
                },
                headerTitle: 'WhatsApp'
            }}>
                <Stack.Screen name="tabs" component={TabsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes