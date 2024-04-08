import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';

export default function CDS() {
  return (
    <WebView
      style={styles.container}
      source={{uri: 'http://192.168.109.30:5173/cds'}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
