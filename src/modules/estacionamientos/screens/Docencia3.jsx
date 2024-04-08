import { StyleSheet, View } from "react-native";
import React, { useState,   useEffect } from 'react';
import { WebView } from 'react-native-webview';
import Loading from "../../../kernel/components/Loading";

export default function Docencia3() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <View style={styles.container}>
      <WebView
        style={styles.container}
        source={{uri: process.env.EXPO_PUBLIC_FRONT+"/docencia3"}}
      />
      <Loading visible={isLoading} title="Cargando Estacionamiento"/>
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
