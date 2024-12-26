import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View className='flex-1  bg-white items-center justify-center h-[100vh]'>
      <Text className='text-3xl font-pbold'>Home</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: 'blue' }} > Go to Home</Link>
    </View>
  )
}

export default Home
