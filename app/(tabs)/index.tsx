import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, router, Redirect } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'

const { height, width } = Dimensions.get("window")

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.view}>
          <Image
            source={images.logo}
            style={styles.img}
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            style={styles.imgbig}
            resizeMode='contain'
          />
          <View style={styles.viewtwo}>
            <Text style={styles.texttwo}>
              Discover Endless Possibilities with {" "}<Text style={styles.textbeautiful}>Aora</Text>
            </Text>

            <Image
              source={images.path}
              style={styles.imgthree}
              resizeMode='contain'
            />
          </View>
          <Text style={styles.textthree}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}

          />
          <StatusBar backgroundColor='#161622' style='light' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
    minHeight: "85%"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 36,
  },
  view: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: height,
    paddingLeft: 16,
    paddingRight: 16,

  },
  img: {
    width: 130,
    height: 84
  },
  imgbig: {
    maxWidth: 380,
    height: 300
  },
  viewtwo: {
    position: "relative",
    marginTop: 20
  },
  texttwo: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 36,
    color: "#fff",
    textAlign: "center"
  },
  textthree: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 22.4,
    color: "#fff",
    textAlign: "center"
  },
  textbeautiful: {
    color: "#FF8E01"
  },
  imgthree: {
    width: 136,
    height: 15,
    position: "absolute",
    top: 65,
    right: 5
  },
})
