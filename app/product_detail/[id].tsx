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

  const arr = [
    {
      id: "i",
      image: image.fn1,
      price: 234.4,
      name: "dulexe couch",
    },
    {
      id: "i3",
      image: image.fn3,
      price: 234.4,
      name: "jumpre cupboards",
    },
    {
      id: "i33",
      image: image.fn5,
      price: 234.4,
      name: "sefetre couch",
    },
  ];

  const data = arr.find((item) => item.id === id)!;

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

        <Image
          source={data.image}
          className="w-full h-[50vh]"
          resizeMode="cover"
        />
        <View className="w-full bg-white rounded-3xl px-4 py-4 -mt-[30px] h-full">
          <View className="flex-row justify-between items-center">
            <Text className=" capitalize font-pBold text-xl text-blue-400">
              {data.name}
            </Text>
            <Text className="py-1 bg-blue-400 text-white px-4 rounded-full flex items-center justify-center">
              $ {data.price}
            </Text>
          </View>
          <View className="flex-row justify-between items-center mt-5">
            <View className="flex-row gap-1 items-center">
              {Array.from({ length: 5 }).map((item, i) => (
                <Ionicons name="star" size={20} color={"gold"} />
              ))}
              <Text className="text-gray">4.9</Text>
            </View>

            <View className="flex-row items-center gap-3">
              <TouchableOpacity>
                {" "}
                <Ionicons name="add-circle" size={20} color={"gray"} />
              </TouchableOpacity>
              <TouchableOpacity>
                {" "}
                <Ionicons name="remove-circle" size={20} color={"gray"} />
              </TouchableOpacity>

              <Text>1</Text>
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-gray text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quas cupiditate sint, minima dolorem possimus at amet dicta culpa,
              adipisci ab sequi, ducimus quaerat eos?
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
