import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { image } from "@/assets/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const ProductList = () => {
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

  return (
    <FlatList
      data={arr}
      keyExtractor={(item) => item.id}
      renderItem={({ index, item }) => {
        return (
          <TouchableOpacity
            onPress={() => router.push(`product_detail/${item.id}`)}
            className="items-start gap-4 mb-4"
          >
            <View className="mr-4 w-[200px] h-[200px] rounded-xl bg-red-500">
              <Image
                source={item.image}
                alt={item.name}
                className="w-full h-full rounded-xl"
                resizeMode="cover"
              />
            </View>
            <View className="flex-row justify-between items-center  w-[200px]">
              <View>
                <Text className="text-white font-psemi">{item.name}</Text>
                <Text className="text-white font-plight">${item.price}</Text>
              </View>
              <Ionicons
                name="add-circle"
                color={"white"}
                size={24}
                className="self-end"
              />
            </View>
          </TouchableOpacity>
        );
      }}
      horizontal
      className="mt-10"
    />
  );
};

export default ProductList;
