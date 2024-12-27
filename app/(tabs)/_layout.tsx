import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import { icons } from "../../constants"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '.';
import Profile from './profile';
import BookmarkScreen from './bookmark';
import ExploreScreen from './explore';
import CreateScreen from './create';
import { Tabs } from 'expo-router';

const Tab = createBottomTabNavigator();


const TabIcon = ({ icon, color, name, focused }: any) => {
  return (
    <View className="items-center justify-center gap-2 " style={{ alignItems: "center", justifyContent: "center", gap: 2 }}>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
        style={{ width: 24, height: 24 }}
      />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{ color: "white" }}>
        {name}
      </Text>
    </View>)
}

export default function TabsLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 64,
          paddingTop: 10
        },
      }}
    >
      {/* صفحه Home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home} // مسیر به آیکون Home
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      />



      {/* صفحه Create */}
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus} // مسیر به آیکون Create
              color={color}
              focused={focused}
              name="Create"
            />
          ),
        }}
      />

      {/* صفحه Bookmark */}
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark} // مسیر به آیکون Bookmark
              color={color}
              focused={focused}
              name="Bookmark"
            />
          ),
        }}
      />

      {/* صفحه Profile */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile} // مسیر به آیکون Profile
              color={color}
              focused={focused}
              name="Profile"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
