import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import ProductList from "@/components/ProductList";

const Home = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <View className="px-4 py-4">
        <View className="justify-between items-center flex-row">
          <Ionicons name="location-outline" color={"white"} size={23} />
          <Text className="font-semi text-white">Shangai , Chaina</Text>

          <TouchableOpacity className="relative">
            <Ionicons color="white" name="cart-outline" size={24} />
            <View className="absolute -right-2 -top-2 bg-red-400 w-[20px] h-[20px] rounded-full flex items-center justify-center">
              <Text>1</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <Banner />
          <Carousel />
          <View className="flex-row justify-between mt-4 items-center">
            <Text className="font-psemi text-lg text-white">New Arrivals</Text>
            <TouchableOpacity>
              <Ionicons name="grid" color={"white"} size={23} />
            </TouchableOpacity>
          </View>

          <ProductList />
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
