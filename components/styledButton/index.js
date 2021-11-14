import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, content } = props;
  const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const textColor = type === "primary" ? "#ffffff" : "#171a20cc";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => console.log("Button pressed")}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
