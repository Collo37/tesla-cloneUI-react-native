import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import CarsList from "./components/carsList";
import Header from "./components/header";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
