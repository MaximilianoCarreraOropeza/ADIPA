import { StyleSheet, Text, View } from 'react-native'
import {React, useEffect, useState} from 'react'
import { Button } from "@rneui/base";
import { getUserByMatricula } from '../../../kernel/components/use_slot';

export default function ValideToken(props) {
    const {navigation, route} = props;
    const [matricula, setMatricula] = useState("");
    const [slots, setSlots] = useState('');

  useEffect(() => {
    getUserByMatricula(route.params)
      .then((response) => {
        if (response.status === "OK") {
          setSlots(response.data[0].id_usuario);
        } else {
          console.error("Error al obtener los espacios de estacionamieno1:", response);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los espacios de estacionamiento2:", error);
      });
  }, []); 
  
  useEffect(() => {
    console.log(slots);
  }, [slots]);

  return (
    <View>
        <Text></Text>
        <Button
          title="Regresar"
        onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({})