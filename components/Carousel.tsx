import { View, Text, Dimensions } from "react-native";
import React from "react";
import { image } from "@/assets/images";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "react-native";

const AppCarousel = () => {
  const imageArr = [image.fn1, image.fn2, image.fn3, image.fn4];
  const width = Dimensions.get("window").width;

  return (
    <View className="w-full mt-8">
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={imageArr}
        scrollAnimationDuration={1000}
        renderItem={({ index }) => (
          <View className="w-full h-full ">
            <Image
              source={imageArr[index]}
              className="w-full h-full rounded-xl"
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
};

export default AppCarousel;
