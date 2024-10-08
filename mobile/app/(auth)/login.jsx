import axios from "axios";
import { useState } from "react";
import { SERVER_API } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} = require("react-native");

function Login({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(name, Text) {
    setData((data) => ({ ...data, [name]: Text }));
  }

  function handlepress() {
    console.log(SERVER_API);
    if (!data.email || !data.password) {
      alert("Please enter all data");
      return;
    }
    axios
      .post(`${SERVER_API}/login`, {
        email: data.email,
        password: data.password,
      })
      .then(async (res) => {
        await AsyncStorage.setItem("auth-token", res.data.token);
        console.log(res.data.token);
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
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

      <View>
        <Button style={styles.button} title="Login" onPress={handlepress} />
      </View>
      <View style={styles.linkBox}>
        <Text>don't have a account</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={styles.linktext}>Signup</Text>
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
export default Login;
