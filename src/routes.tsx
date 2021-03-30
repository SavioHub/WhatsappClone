import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { FontAwesome5 } from "@expo/vector-icons";

import Buttons from "./components/stackButtons";

import Call from "./pages/Calls";
import Message from "./pages/Messages";
import Status from "./pages/Status";
import Camera from "./pages/Camera";
import { View } from "react-native";

const Stack = createStackNavigator();
const Tabs = createMaterialTopTabNavigator();

const TabsScreen = () => {
  return (
    <Tabs.Navigator
      sceneContainerStyle={{
        backgroundColor: "#101e29",
      }}
      tabBarOptions={{
        labelStyle: {
          fontWeight: "bold",
        },
        indicatorStyle: {
          backgroundColor: "#2baba4",
        },
        style: {
          backgroundColor: "#212c32",
          elevation: 2,
        },
        activeTintColor: "#2baba4",
        inactiveTintColor: "#9d9d9e",
        showIcon: true,
      }}
      initialRouteName="message"
    >
      <Tabs.Screen
        name="camera"
        component={Camera}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="camera" size={18} color={color} />
          ),
          tabBarLabel: () => <></>,
        }}
      />
      <Tabs.Screen name="message" component={Message} />
      <Tabs.Screen name="status" component={Status} />
      <Tabs.Screen name="call" component={Call} />
    </Tabs.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "#101e29",
          },
          headerStyle: {
            backgroundColor: "#212c32",
            borderBottomWidth: 0,
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#b3b3b3",
            fontSize: 28,
          },
          headerTitle: "WhatsApp",
        }}
      >
        <Stack.Screen
          name="tabs"
          component={TabsScreen}
          options={{
            headerRight: () => <Buttons />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
