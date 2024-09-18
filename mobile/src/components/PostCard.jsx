import React from "react";
import { View, Text, StyleSheet } from "react-native";

function PostCard({ data }) {
  return (
    <View style={styles.container}>
      <View style={{ margin: 5, padding: 5 }}>
        <Text>{data.user}</Text>
      </View>
      <View style={{ margin: 5, padding: 5 }}>
        <Text>{data.content}</Text>
      </View>
      <View style={{ flexDirection: "row", margin: 5, padding: 5 }}>
        <Text style={{ margin: 5 }}>likes:{data.likes.length}</Text>
        <Text style={{ margin: 5 }}>retweets:{data.retweets.length}</Text>
        <Text style={{ margin: 5 }}>comments:{data.comments.length}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default PostCard;
