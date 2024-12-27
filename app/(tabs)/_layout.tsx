// import { Image, StyleSheet, Text, View } from 'react-native'
// import { Tabs, Redirect } from 'expo-router'
// import { icons } from "../../constants"
// import React from 'react'

// const TabIcon = ({ icon, color, name, focused }: any) => {
//   return (
//     <View className="items-center justify-center gap-2 " style={{ alignItems: "center", justifyContent: "center", gap: 2 }}>
//       <Image
//         source={icon}
//         resizeMode='contain'
//         tintColor={color}
//         className="w-6 h-6"
//         style={{ width: 24, height: 24 }}
//       />
//       <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{ color: "white" }}>
//         {name}
//       </Text>
//     </View>)
// }

// const TabLayout = () => {
//   return (
//     <>

//       <Tabs screenOptions={{
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: "#FFA001",
//         tabBarInactiveTintColor: "#CDCDE0",
//         tabBarStyle: {
//           backgroundColor: "#161622",
//           borderTopWidth: 1,
//           borderTopColor: "#232533",
//           height: 84
//         }
//       }}
//       >
//         <Tabs.Screen
//           name="home"
//           options={{
//             title: "Home",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon icon={icons.home} color={color} focused={focused} name="Home" />
//             )
//           }}
//         />

//         <Tabs.Screen
//           name="bookmark"
//           options={{
//             title: "Bookmark",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon icon={icons.bookmark} color={color} focused={focused} name="Bookmark" />
//             )
//           }}
//         />

//         <Tabs.Screen
//           name="create"
//           options={{
//             title: "Create",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon icon={icons.plus} color={color} focused={focused} name="Create" />
//             )
//           }}
//         />

//         <Tabs.Screen
//           name="profile"
//           options={{
//             title: "Profile",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon icon={icons.profile} color={color} focused={focused} name="profile" />
//             )
//           }}
//         />



//       </Tabs >
//     </>
//   )
// }

// export default TabLayout

// const styles = StyleSheet.create({})

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './index';
import Profile from './profile';
import BookmarkScreen from './bookmark';
import ExploreScreen from './explore';
import CreateScreen from './create';

const Tab = createBottomTabNavigator();

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
          height: 84,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
