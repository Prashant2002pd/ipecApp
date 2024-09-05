import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useSocket } from '../context/socketContext'

const Home = ({navigation}) => {
    const socket=useSocket()
    useEffect(()=>{
        socket.on("connect",()=>{
            console.log("Connected",socket.id)
            navigation.navigate("LiveChat")
        })
        return ()=>{
        socket.disconnect();
        }
    },[])
  return (
    <View>
        <Text>Home</Text>
        <Button title="Go to LiveChat" onPress={()=>navigation.navigate("LiveChat")}/>

    </View>
  )
}

export default Home