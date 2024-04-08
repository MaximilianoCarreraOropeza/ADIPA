import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';

export default function TallerPesado2() {
  return (
    <WebView
      style={styles.container}
      source={{uri: 'http://192.168.109.30:5173/tallerpesado2'}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
