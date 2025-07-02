import Place from "@/components/Place";
import { PLACES } from "@/constants/places";
import { Fontisto } from "@expo/vector-icons";
import {
  Dimensions,
  FlatList,
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
        source={{uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'}}
        style={styles.image}
      >
        <Text style={styles.title}>Dream Stay</Text>

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
    height: "100%",
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
