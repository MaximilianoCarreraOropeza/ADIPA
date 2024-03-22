import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Overlay, Button, Icon } from "@rneui/base";

export default function Error(props) {
  const { visible, setVisible, title } = props;
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
        <Icon name="error" size={50} color="red" iconStyle={styles.Error} />
        <Text style={styles.title}>{title}</Text>
        <View>
          <Button
            title="Aceptar"
            onPress={toggleOverlay}
            buttonStyle={styles.button}
            titleStyle={styles.containerBtn}
            color="error"
          />
        </View>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 180,
    width: 300,
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "red",
    textTransform: "uppercase",
    marginTop: 16,
    fontSize: 18,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 15,
  },
  containerBtn: {
    fontSize: 18,
  },
  Error: {
    marginTop: 15,
  }
});
