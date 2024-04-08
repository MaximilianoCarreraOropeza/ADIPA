import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';


export default function Cedim() {
  return (
   <WebView
    style={styles.container}
    source={{uri: 'http://192.168.109.30:5173/cedim'}}
   />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
