import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabbarIcon from "@/components/TabbarIcon";

const TabLayout = () => {
  return (
    <Tabs
    
    screenOptions={{
      tabBarActiveTintColor:'#2A4D50',
      tabBarInactiveTintColor:'#83829A',
      tabBarStyle:{
        backgroundColor:"#0b0b0c"
      }
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabbarIcon
              color={color}
              name={focused ? "home" : "home-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabbarIcon
              color={color}
              name={'search-sharp'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabbarIcon
              color={color}
              name={focused ? "person" : "person-outline"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
