import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const TabbarIcon = ({
  color,
  name,
}: {

  color: string;
  name: any;
}) => {
  return <Ionicons name={name} color={color} size={24} />;
};

export default TabbarIcon;
