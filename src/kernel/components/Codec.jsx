import { StyleSheet, Image, Dimensions } from "react-native";
import React, { useEffect, useState} from "react";
import { Overlay } from "@rneui/base";
import mapaCodec from "../../../assets/mapacodec.jpg";
import { View } from "react-native";

export default function Codec(props) {
  const { visible, setVisible } = props;
  const image = mapaCodec;
  const toggleOverlay = () => {
    setVisible(!visible);
  };


  return (
    <Overlay
      isVisible={visible}
      overlayBackgroundColor="transparent"
      onBackdropPress={toggleOverlay}
      overlayStyle={styles.overlay}
    >
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "transparent",
    borderRadius: 12,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
