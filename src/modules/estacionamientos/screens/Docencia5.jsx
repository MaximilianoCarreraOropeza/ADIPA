import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';
export default function Docencia5() {
  return (
    <WebView
      style={styles.container}
      source={{uri: 'http://192.168.0.251:5173'}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
