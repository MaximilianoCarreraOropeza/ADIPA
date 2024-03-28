import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Overlay, Button, Icon } from "@rneui/base";

export default function Error(props) {
  const { type, visible, setVisible, title, confirm, setConfirm } = props;

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const confirmAction = () => {
    setConfirm(!confirm);
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
                color="#F8EF22"
                iconStyle={styles.Warning}
                type="material-community"
              />
              <Text style={styles.titleWarning}>{title}</Text>
            </View>
          </Overlay>
        </View>
      ) : type == "success" ? (
        <View>
          <Overlay
            isVisible={visible}
            windowsBackgroundColor="rgb(0,0,0,0,5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlaySuccess}
          >
            <View style={styles.containerSuccess}>
              <Icon
                name="check-circle-outline"
                size={50}
                color="#009475"
                iconStyle={styles.Success}
                type="material-community"
              />
              <Text style={styles.titleSuccess}>{title}</Text>
            </View>
          </Overlay>
        </View>
      ) : type == "ask" ? (
        <View>
          <Overlay
            isVisible={visible}
            windowsBackgroundColor="rgb(0,0,0,0,5)"
            overlayBackgroundColor="transparent"
            onBackdropPress={toggleOverlay}
            overlayStyle={styles.overlayAsk}
          >
            <View style={styles.containerSuccess}>
              <Icon
                name="comment-question"
                size={50}
                color="#009475"
                iconStyle={styles.Success}
                type="material-community"
              />
              <Text style={styles.titleSuccess}>{title}</Text>

              <View style={styles.btns}>
              <Button
                  title="Cancelar"
                  type="outline"
                  onPress={toggleOverlay}
                  buttonStyle={styles.buttonError}
                  titleStyle={styles.containerBtnError}
                />
                <Button
                  title="Aceptar"
                  type="outline"
                  onPress={confirmAction}
                  buttonStyle={styles.buttonSuccess}
                  titleStyle={styles.containerBtnSuccess}
                />
              </View>
            </View>
          </Overlay>
        </View>
      ) : (
        console.log("No se ha seleccionado un tipo de mensaje")
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  overlayError: {
    height: 200,
    width: 350,
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  titleError: {
    color: "#000000",
    marginTop: 16,
    fontSize: 18,
  },
  containerError: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonError: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
    marginBottom: "5%",
    marginTop: "5%",
    marginLeft: "10%"
  },
  containerBtnError: {
    fontSize: 18,
    color: "black",
  },
  Error: {
    marginTop: 15,
  },
  overlayWarning: {
    height: 200,
    width: 350,
    backgroundColor: "white",
    borderColor: "#F8EF22",
    borderWidth: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  titleWarning: {
    color: "#000000",
    marginTop: 16,
    fontSize: 18,
  },
  containerWarning: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Warning: {
    marginTop: 15,
  },
  overlaySuccess: {
    height: 200,
    width: 350,
    backgroundColor: "white",
    borderColor: "#009475",
    borderWidth: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  titleSuccess: {
    color: "#000000",
    marginTop: 12,
    fontSize: 18,
  },
  containerSuccess: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSuccess: {
    borderRadius: 5,
    borderWidth: 2,
    marginBottom: "5%",
    marginTop: "5%",
    marginLeft: "10%",
  },
  containerBtnSuccess: {
    fontSize: 18,
    color: "black",
  },
  Success: {
    marginTop: 15,
  },
  overlayAsk: {
    height: 200,
    width: 350,
    backgroundColor: "white",
    borderColor: "#009475",
    borderWidth: 4,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  btns: {
    flexDirection: "row",
  },
});
