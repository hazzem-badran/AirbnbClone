import { StyleSheet, Text, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.continer} >
      <Text style={styles.text}>Screen Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
})

