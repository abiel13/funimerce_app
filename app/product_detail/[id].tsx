import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { router, useGlobalSearchParams } from "expo-router";
import { image } from "@/assets/images";
import { StatusBar } from "expo-status-bar";

const ProductDetail = () => {
  const { id } = useGlobalSearchParams();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="relative">
        <View className="z-50 absolute  w-full flex-row justify-between items-center right-0 left-0 ">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-circle" color={"gray"} size={28} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="heart" color={"gray"} size={28} />
          </TouchableOpacity>
        </View>

        <Image source={image.fn5} className="w-full h-[50vh]" resizeMode="cover" />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
