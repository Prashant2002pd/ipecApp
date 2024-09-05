import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { io } from "socket.io-client";
import {SOCKET_URL} from "@env"
import { useSocket } from "../context/socketContext";

const LiveChat = ({ navigation }) => {
  const socket=useSocket()
  const [mssg,setMssg]=useState([])

  useEffect(() => {
    async function gettoken() {
      const token = await AsyncStorage.getItem("auth-token");

      if (!token) {
        navigation.navigate("Login");
      }
    }
    gettoken();
    socket.on("receive-message",(mssg)=>setMssg((prev)=>[...prev,mssg]))
  }, []);

  const [data, setData] = useState({
    message:""
  });

  function handleChange(name, Text) {
    setData((data) => ({ ...data, [name]: Text }));
  }

  function sendLive(){
    socket.emit("message",data.message)
  }


  return <View style={{height:580}}>
    <View style={{display:"flex",direction:"flex-col",gap:12}}>
    {mssg.length>0&&mssg.map((data,index)=>{
      return(
        <Text key={index}>{data}</Text>
      )
    })}
    <Button title="Go to Home" onPress={()=>navigation.navigate("Home")}></Button>
    </View>
    
    <View  style={{position:"absolute",bottom:5, width:350}}>
    <TextInput style={{paddingHorizontal:24,paddingVertical:12}}
      name="message"
      value={data}
      onChangeText={(Text) => handleChange("message", Text)}
      placeholder="Type message ..."
    />
    <Button title="Send" onPress={sendLive}/>

    </View>
   
  </View>;
};

export default LiveChat;
