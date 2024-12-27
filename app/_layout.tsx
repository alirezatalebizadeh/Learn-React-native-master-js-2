import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabLayout from './(tabs)/_layout';
import Search from './search/[query]';
import NotFoundScreen from './+not-found';
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tabs">
        {/* تعریف مسیر تب‌ها */}
        <Stack.Screen name="tabs" component={TabLayout} options={{ headerShown: false }} />

        {/* مسیر برای صفحات دیگر (مثلاً صفحه جستجو یا not-found) */}
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="not-found" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
