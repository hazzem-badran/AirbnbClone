import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Place = ({
  image,
  bed,
  bedroom,
  description,
  type,
  title,
  oldPrice,
  newPrice,
  totalPrice,
  whitDes=true,
}: PlaceProps) => {
  return (
    <ScrollView>
      <View style={{}}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.bedrooms}>
            {bed} bed {bedroom} bedroom
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {type}. {title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${oldPrice}</Text>
            <Text style={styles.price}> ${newPrice} </Text>/ night
          </Text>

          <Text style={styles.totalPrice}>${totalPrice} total</Text>
          {whitDes && <Text style={styles.longDescription}>{description}</Text>}
        </View>
      </View>
    </ScrollView>
  );
};

export default Place;

const styles = StyleSheet.create({
  continer: {
    margin: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover" as const,
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through" as const,
  },
  price: {
    fontWeight: "bold" as const,
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline" as const,
  },
  longDescription: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 24,
  },
});
