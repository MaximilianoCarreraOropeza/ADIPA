import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';

export default function CafeBalcon() {
  return (
    <WebView
      style={styles.container}
      source={{uri: 'https://b21wjf5j-5173.usw3.devtunnels.ms/cafebalcon'}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
