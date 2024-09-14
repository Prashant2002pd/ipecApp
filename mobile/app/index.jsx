// import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import {Link} from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
// import Login from "./src/pages/Login";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {SOCKET_URL} from "@env"
// import Signup from "./src/pages/Signup";
// import LiveChat from "./src/pages/LiveChat";
// import { io } from "socket.io-client";
// import { useEffect, useMemo } from "react";
// import { SocketProvider } from "./src/context/socketContext";
// import Home from "./src/pages/Home";
// const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height:'100%'}}>
            <View className="w-full justify-center items-center h-full px-4">
                <Text className="text-white text-3xl font-bold">Welcome to our App</Text>
                <Link href="/home" className="text-blue-600 text-xl font-psemibold">Go to Home </Link>
            </View>
        </ScrollView>
    </SafeAreaView>
    // <SocketProvider>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="LiveChat" component={LiveChat} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // </SocketProvider>
  );
}
