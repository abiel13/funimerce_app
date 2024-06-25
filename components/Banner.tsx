import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

const Banner = () => {
  return (
    <View className="mt-8">
      <Text className="text-white font-pBold text-2xl">Discover The Most </Text>
      <Text className="text-green-800 font-psemi text-3xl">
        Luxurious Funiture
      </Text>

      <View className="w-full bg-secondary h-10 rounded-xl mt-4 flex-row items-center px-1">
        <TouchableOpacity>
          <Feather name="search" size={22} className="text-gray" />
        </TouchableOpacity>
        <View className="flex-1  h-full px-2 items-center flex-row">
          <TextInput placeholder="Search ....." />
        </View>
      </View>

      <View className="w-full"></View>
    </View>
  );
};

export default Banner;
