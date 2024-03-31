import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Overlay } from "@rneui/base";
import mapaCodec from "../../../assets/mapacodec.jpg";

export default function Codec(props) {
  const { visible, setVisible } = props;
  const image = mapaCodec;
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const ANCHO_IMAGE = width * 1.0;
  const ALTO_IMAGE = height * 0.5;
  const escalaImg = useSharedValue(1);
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const centroImagen = {
    x: ANCHO_IMAGE / 2,
    y: ALTO_IMAGE / 2,
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const pinch = Gesture.Pinch()
    .onStart((e) => {
      x.value = e.focalX;
      y.value = e.focalY;
    })
    .onUpdate((e) => {
      escalaImg.value = e.scale;
    })
    .onEnd(() => {
      escalaImg.value = withTiming(1, { duration: 1000 });
    });

  const styles = StyleSheet.create({
    overlay: {
      backgroundColor: "white",
      width: ANCHO_IMAGE,
      height: ALTO_IMAGE,
      justifyContent: "center",
      alignItems: "center"
    },
    image: {
      width: ANCHO_IMAGE,
      height: ALTO_IMAGE,
      resizeMode: "contain"
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: x.value },
      { translateY: y.value },
      { translateX: -centroImagen.x },
      { translateY: -centroImagen.y },
      { scale: escalaImg.value },
      { translateX: -x.value },
      { translateY: -y.value },
      { translateX: centroImagen.x },
      { translateY: centroImagen.y },
    ],
  }));

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={styles.overlay}
    >
      <GestureHandlerRootView>
        <GestureDetector gesture={pinch}>
          <Animated.Image
            source={image}
            style={[styles.image, animatedStyle]}
          />
        </GestureDetector>
      </GestureHandlerRootView>
    </Overlay>
  );
}
