import { Fontisto } from "@expo/vector-icons";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return (
    <View>
      <Pressable style={styles.searchBtn}>
        <Fontisto name="search" size={18} color={"#f15454"} />
        <Text style={styles.searchBtnText}>Explore nearby stays</Text>
      </Pressable>
      <ImageBackground
        source={require("../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Go Near</Text>

        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 80,
    fontWeight: "bold",
    width: "70%",
    marginLeft: 25,
    marginTop: 25,
  },
  btn: {
    backgroundColor: "white",
    width: 200,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 25,
  },
  btnText: {
    fontWeight: "bold",
  },
  searchBtn: {
    position: "absolute",
    zIndex: 1,
    top: 62,
    marginHorizontal: 40,
    flexDirection: "row",
    width: Dimensions.get("screen").width - 80,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    // marginLeft: 25,
  },
  searchBtnText: {
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 10,
  },
});
