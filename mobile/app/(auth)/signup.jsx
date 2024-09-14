import axios from "axios";
import { useState } from "react";
import {SERVER_API} from "@env";

const {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} = require("react-native");

function Signup({ navigation }) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(name, Text) {
    setData((data) => ({ ...data, [name]: Text }));
  }

  function handlepress() {
    // console.log(SERVER_API)
    if (
      !data.username ||
      !data.email ||
      !data.password ||
      !data.confirmPassword
    ) {
      alert("Please enter all data");
      return;
    }
    if (data.password === data.confirmPassword) {
      axios.post(`${SERVER_API}/signup`,{"username":data.username,"email":data.email,"password":data.password})
      .then(res=>{
        console.log(res)
        navigation.navigate("Login");
      })
      .catch(err=>{
        console.error(err)
      })
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.rapper}>
        <Text>UserName:</Text>
        <TextInput
          name="username"
          style={styles.textinput}
          value={Text}
          onChangeText={(Text) => handleChange("username", Text)}
        />
      </View>
      <View style={styles.rapper}>
        <Text>Email:</Text>
        <TextInput
          name="email"
          style={styles.textinput}
          value={Text}
          onChangeText={(Text) => handleChange("email", Text)}
        />
      </View>
      <View style={styles.rapper}>
        <Text>Password:</Text>
        <TextInput
          name="password"
          style={styles.textinput}
          secureTextEntry={true}
          value={Text}
          onChangeText={(Text) => handleChange("password", Text)}
        />
      </View>
      <View style={styles.rapper}>
        <Text>Confirm Password:</Text>
        <TextInput
          name="confirmPassword"
          style={styles.textinput}
          secureTextEntry={true}
          value={Text}
          onChangeText={(Text) => handleChange("confirmPassword", Text)}
        />
      </View>
      <View>
        <Button style={styles.button} title="Signup" onPress={handlepress} />
      </View>
      <View style={styles.linkBox}>
        <Text>already have a account</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.linktext}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 30,
  },
  textinput: {
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  rapper: {
    margin: 5,
  },
  button: {
    margin: 20,
    padding: 10,
  },
  linktext: {
    color: "blue",
    textDecorationLine: "underline",
  },
  linkBox: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
});
export default Signup;
