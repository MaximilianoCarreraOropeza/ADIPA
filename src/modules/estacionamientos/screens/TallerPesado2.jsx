import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';

export default function TallerPesado2() {
  return (
    <WebView
      style={styles.container}
      source={{uri: 'http://'}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
