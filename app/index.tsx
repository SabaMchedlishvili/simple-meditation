import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import beachImage from "@/assets/meditation-images/beach.webp";
import { StatusBar } from "expo-status-bar";
import CustumeButton from "@/components/CustumeButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const app = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
          <SafeAreaView className="flex-1 px-1 my-5 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-3xl mt-1">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular font-light text-2xl mt-3">
                Simplyfing Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustumeButton
                onPress={() => router.push("/NatureMeditate")}
                title={"Get Started"}
              />
            </View>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default app;
