import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import PostCard from "../../src/components/PostCard";
// import { useSocket } from '../context/socketContext'

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  // const socket=useSocket()
  // useEffect(()=>{
  //     socket.on("connect",()=>{
  //         console.log("Connected",socket.id)
  //         navigation.navigate("LiveChat")
  //     })
  //     return ()=>{
  //     socket.disconnect();
  //     }
  // },[])

  useEffect(() => {
    console.log("hi");

    try {
      axios.get(`${process.env.SERVER_API}/feed`).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View className="margin-t-auto">
      <Text className="text-2xl font-bold">Posts</Text>
      <View style={{ flexDirection: "column-reverse" }}>
        {data.length
          ? data.map((item, key) => {
              return <PostCard key={key} data={item} />;
            })
          : ""}
      </View>
    </View>
  );
};

export default Home;
