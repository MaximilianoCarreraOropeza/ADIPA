import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Overlay, Button, Icon } from "@rneui/base";

export default function Error(props) {
  const { type, visible, setVisible, title } = props;
  
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      {type == "error" ? (
        <View>
          <Overlay
            isVisible={visible}
            windowsBackgroundColor="rgb(0,0,0,0,5)"
            overlayBackgroundColor="transparent"
            onBackdropPress={toggleOverlay}
            overlayStyle={styles.overlayError}
          >
            <View style={styles.containerError}>
              <Icon
                name="alert-circle-outline"
                size={50}
                color="red"
                iconStyle={styles.Error}
                type="material-community"
              />
              <Text style={styles.titleError}>{title}</Text>
              <View>
                <Button
                  title="Aceptar"
                  onPress={toggleOverlay}
                  buttonStyle={styles.buttonError}
                  titleStyle={styles.containerBtnError}
                  color="error"
                />
              </View>
            </View>
          </Overlay>
        </View>
      ) : type == "warning" ? (
        <View>
          <Overlay
            isVisible={visible}
            windowsBackgroundColor="rgb(0,0,0,0,5)"
            overlayBackgroundColor="transparent"
            onBackdropPress={toggleOverlay}
            overlayStyle={styles.overlayWarning}
          >
            <View style={styles.containerWarning}>
              <Icon
                name="alert-outline"
                size={50}
                color="yellow"
                iconStyle={styles.Warning}
                type="material-community"
              />
              <Text style={styles.titleWarning}>{title}</Text>
              <View>
                <Button
                  title="Aceptar"
                  onPress={toggleOverlay}
                  buttonStyle={styles.buttonWarning}
                  titleStyle={styles.containerBtnWarning}
                  color="warning"
                />
              </View>
            </View>
          </Overlay>
        </View>
      ) : type == "success" ? (
        <View>
          <Overlay
            isVisible={visible}
            windowsBackgroundColor="rgb(0,0,0,0,5)"
            overlayBackgroundColor="transparent"
            onBackdropPress={toggleOverlay}
            overlayStyle={styles.overlaySuccess}
          >
            <View style={styles.containerSuccess}>
              <Icon
                name="check-circle-outline"
                size={50}
                color="blue"
                iconStyle={styles.Success}
                type="material-community"
              />
              <Text style={styles.titleSuccess}>{title}</Text>
              <View>
                <Button
                  title="Aceptar"
                  onPress={toggleOverlay}
                  buttonStyle={styles.buttonSuccess}
                  titleStyle={styles.containerBtnSuccess}
                />
              </View>
            </View>
          </Overlay>
        </View>
      ) : (
        console.log("Error en el tipo de mensaje")
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  overlayError: {
    height: 200,
    width: 300,
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  titleError: {
    color: "red",
    textTransform: "uppercase",
    marginTop: 16,
    fontSize: 18,
    justifyContent: "center",
  },
  containerError: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonError: {
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 15,
  },
  containerBtnError: {
    fontSize: 18,
  },
  Error: {
    marginTop: 15,
  },
  overlayWarning: {
    height: 200,
    width: 300,
    backgroundColor: "white",
    borderColor: "yellow",
    borderWidth: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  titleWarning: {
    color: "yellow",
    textTransform: "uppercase",
    marginTop: 16,
    fontSize: 16,
  },
  containerWarning: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWarning: {
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 15,
  },
  containerBtnWarning: {
    fontSize: 18,
  },
  Warning: {
    marginTop: 15,
  },
  overlaySuccess: {
    height: 200,
    width: 300,
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  titleSuccess: {
    color: "blue",
    textTransform: "uppercase",
    marginTop: 16,
    fontSize: 18,
    justifyContent: "center",
  },
  containerSuccess: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSuccess: {
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 15,
  },
  containerBtnSuccess: {
    fontSize: 18,
  },
  Success: {
    marginTop: 15
  },
});
