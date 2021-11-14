import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import CarItem from "../carItem";
import cars from "../../data/cars";
import styles from "./styles";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={(car) => <CarItem carData={car} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
