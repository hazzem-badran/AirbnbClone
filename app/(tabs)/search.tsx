import Place from "@/components/Place";
import { PLACES } from "@/constants/places";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.continer}>
      <FlatList
        data={PLACES}
        renderItem={({ item }) => <Place {...item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,

  },
  
});
