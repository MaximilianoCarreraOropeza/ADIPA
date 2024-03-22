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
        <Image source={image} style={styles.image}/>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: "50%",
    width: "100%",
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
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
