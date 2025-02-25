import { Link, Stack } from "expo-router";
import {  View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
    <View
      style={styles.container}
    >
      <Link href={"/"} style={styles.button}>Go back to home Screen</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2f6b85",
  },
  text: {
    color: "white",
    fontSize: 28,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
    color: "#2f6b85",
    fontWeight: "bold",
    textTransform: "uppercase"
  }

});