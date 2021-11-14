import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../styledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.carData.item;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.imageBackground} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}&nbsp;<Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton type="primary" content="custom order" />
        <StyledButton type="secondary" content="existing inventory" />
      </View>
    </View>
  );
};

export default CarItem;
