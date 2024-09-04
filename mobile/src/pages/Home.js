import React, { useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  useEffect(() => {
    async function gettoken() {
      const token = await AsyncStorage.getItem("auth-token");

      if (!token) {
        navigation.navigate("Login");
      }
    }
    gettoken();
  }, []);
  return <View></View>;
};

export default Home;
