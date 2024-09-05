import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SOCKET_URL} from "@env"
import Signup from "./src/pages/Signup";
import LiveChat from "./src/pages/LiveChat";
import { io } from "socket.io-client";
import { useEffect, useMemo } from "react";
import { SocketProvider } from "./src/context/socketContext";
import Home from "./src/pages/Home";
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <SocketProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LiveChat" component={LiveChat} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    </SocketProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
