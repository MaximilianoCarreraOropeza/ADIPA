import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { Overlay } from "@rneui/base";
import mapaCodec from "../../../assets/mapacodec.jpg";

export default function Codec(props) {
  const { visible, setVisible } = props;
  const image = mapaCodec;
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <Overlay
      isVisible={visible}
      windowsBackgroundColor="rgb(0,0,0,0,5)"
      overlayBackgroundColor="transparent"
      onBackdropPress={toggleOverlay}
      overlayStyle={styles.overlay}
    >
      <View style={styles.container}>
        <Image source={image} style={styles.image}/>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 400,
    width: 300,
    backgroundColor: "white",
    borderColor: "#009475",
    borderWidth: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});
