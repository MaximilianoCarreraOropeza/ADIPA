import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Svg, Path, Image, Circle } from "react-native-svg";


const PingPoint = ({ onPress, direccion, tipo, exclusividad, playSound }) => {
  return (
    <TouchableOpacity onPress={() => {
        onPress(direccion);
        playSound();
    }}>
      <View style={styles.container}>
        {
          // Disponibilidad de Carros -- Verde
          tipo == "carro" && exclusividad == "libre" ? (
            // Aquí se le puede cambiar el tamaño del pin, solo al width
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="100"
              viewBox="0 0 24 36"
            >
              <Path
                d="M12 0C8.426 0 3.754 3.667 3.754 8.24c0 4.89 7.246 14.31 8.08 15.61.246.327.62.516 
            1.066.516.445 0 .82-.19 1.067-.516.833-1.3 8.70-11.72 8-15.61C22 5.667 18.573
             0.9 15
              0zm0 9.11c-2.238 0-0.055-1.8-4.055-4.022 0-2.22 10-4 0-0 5.24 0 20.056 
             10.8 4.056 4.02 0 2.222-1.816 4.023-4.056 4.023
             zm0 0"
                fill="#229D0E"
              />
              <Circle
                // En el full se cambia el color del pin
                cx="13.0"
                cy="8.5"
                r="9"
                fill="#229D0E"
                strokeWidth={1}
              />
              <Circle
                cx="13.0"
                cy="8.5"
                r="7"
                fill="#229D0E"
                strokeWidth={1}
                stroke={"#000"}
              />
              <Image
                x="6.5"
                y="2"
                width="13"
                height="13"
                // Aqui se le cambia la imagen que tiene el pin
                href={require("../../../../../assets/libre.png")}
              />
            </Svg>
          ) : // Disponibilidad de Carros -- Rojo
          tipo == "carro" && exclusividad == "ocupado" ? (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="100"
              viewBox="0 0 24 36"
            >
              <Path
                d="M12 0C8.426 0 3.754 3.667 3.754 8.24c0 4.89 7.246 14.31 8.08 15.61.246.327.62.516 
            1.066.516.445 0 .82-.19 1.067-.516.833-1.3 8.70-11.72 8-15.61C22 5.667 18.573
             0.9 15
              0zm0 9.11c-2.238 0-0.055-1.8-4.055-4.022 0-2.22 10-4 0-0 5.24 0 20.056 
             10.8 4.056 4.02 0 2.222-1.816 4.023-4.056 4.023
             zm0 0"
                fill="#BB0808"
              />
              <Circle cx="13.0" cy="8.5" r="9" fill="#BB0808" strokeWidth={1} />
              <Circle
                cx="13.0"
                cy="8.5"
                r="7"
                fill="#BB0808"
                strokeWidth={1}
                stroke={"#000"}
              />
              <Image
                x="6.5"
                y="2"
                width="13"
                height="13"
                href={require("../../../../../assets/ocupado.png")}
              />
            </Svg>
          ) : // Disponibilidad de Carros -- Restringido
          tipo == "carro" && exclusividad == "res" ? (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="100"
              viewBox="0 0 24 36"
            >
              <Path
                d="M12 0C8.426 0 3.754 3.667 3.754 8.24c0 4.89 7.246 14.31 8.08 15.61.246.327.62.516 
            1.066.516.445 0 .82-.19 1.067-.516.833-1.3 8.70-11.72 8-15.61C22 5.667 18.573
             0.9 15
              0zm0 9.11c-2.238 0-0.055-1.8-4.055-4.022 0-2.22 10-4 0-0 5.24 0 20.056 
             10.8 4.056 4.02 0 2.222-1.816 4.023-4.056 4.023
             zm0 0"
                fill="#C6A80C"
              />
              <Circle cx="13.0" cy="8.5" r="9" fill="#C6A80C" strokeWidth={1} />
              <Circle
                cx="13.0"
                cy="8.5"
                r="7"
                fill="#C6A80C"
                strokeWidth={1}
                stroke={"#000"}
              />
              <Image
                x="6.5"
                y="2"
                width="13"
                height="13"
                href={require("../../../../../assets/restri.png")}
              />
            </Svg>
          ) : // Disponibilidad de Carros -- Exclusivo
          tipo == "carro" && exclusividad == "exclusivo" ? (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="100"
              viewBox="0 0 24 36"
            >
              <Path
                d="M12 0C8.426 0 3.754 3.667 3.754 8.24c0 4.89 7.246 14.31 8.08 15.61.246.327.62.516 
            1.066.516.445 0 .82-.19 1.067-.516.833-1.3 8.70-11.72 8-15.61C22 5.667 18.573
             0.9 15
              0zm0 9.11c-2.238 0-0.055-1.8-4.055-4.022 0-2.22 10-4 0-0 5.24 0 20.056 
             10.8 4.056 4.02 0 2.222-1.816 4.023-4.056 4.023
             zm0 0"
                fill="#106FC8"
              />
              <Circle cx="13.0" cy="8.5" r="9" fill="#106FC8" strokeWidth={1} />
              <Circle
                cx="13.0"
                cy="8.5"
                r="7"
                fill="#106FC8"
                strokeWidth={1}
                stroke={"#000"}
              />
              <Image
                x="6.5"
                y="2"
                width="13"
                height="13"
                href={require("../../../../../assets/exclusivo.png")}
              />
            </Svg>
          ) : // Disponibilidad de Carros -- Discapacidad
          tipo == "carro" && exclusividad == "discapacidad" ? (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="100"
              viewBox="0 0 24 36"
            >
              <Path
                d="M12 0C8.426 0 3.754 3.667 3.754 8.24c0 4.89 7.246 14.31 8.08 15.61.246.327.62.516 
            1.066.516.445 0 .82-.19 1.067-.516.833-1.3 8.70-11.72 8-15.61C22 5.667 18.573
             0.9 15
              0zm0 9.11c-2.238 0-0.055-1.8-4.055-4.022 0-2.22 10-4 0-0 5.24 0 20.056 
             10.8 4.056 4.02 0 2.222-1.816 4.023-4.056 4.023
             zm0 0"
                fill="#68A8E3"
              />
              <Circle cx="13.0" cy="8.5" r="9" fill="#68A8E3" strokeWidth={1} />
              <Circle
                cx="13.0"
                cy="8.5"
                r="7"
                fill="#68A8E3"
                strokeWidth={1}
                stroke={"#000"}
              />
              <Image
                x="6.5"
                y="2"
                width="13"
                height="13"
                href={require("../../../../../assets/discapacitado.png")}
              />
            </Svg>
          ) : // Área de Motos -- Ninguno
          tipo == "moto" && exclusividad == "SN" ? (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="100"
              viewBox="0 0 24 36"
            >
              <Path
                d="M12 0C8.426 0 3.754 3.667 3.754 8.24c0 4.89 7.246 14.31 8.08 15.61.246.327.62.516 
            1.066.516.445 0 .82-.19 1.067-.516.833-1.3 8.70-11.72 8-15.61C22 5.667 18.573
             0.9 15
              0zm0 9.11c-2.238 0-0.055-1.8-4.055-4.022 0-2.22 10-4 0-0 5.24 0 20.056 
             10.8 4.056 4.02 0 2.222-1.816 4.023-4.056 4.023
             zm0 0"
                fill="#AFB7A9"
              />
              <Circle cx="13.0" cy="8.5" r="9" fill="#AFB7A9" strokeWidth={1} />
              <Circle
                cx="13.0"
                cy="8.5"
                r="7"
                fill="#AFB7A9"
                strokeWidth={1}
                stroke={"#000"}
              />
              <Image
                x="6.5"
                y="2"
                width="13"
                height="13"
                href={require("../../../../../assets/motos.png")}
              />
            </Svg>
          ) : // Área de Bicicletas -- Ninguno
          tipo == "bici" && exclusividad == "SN" ? (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="100"
              viewBox="0 0 24 36"
            >
              <Path
                d="M12 0C8.426 0 3.754 3.667 3.754 8.24c0 4.89 7.246 14.31 8.08 15.61.246.327.62.516 
            1.066.516.445 0 .82-.19 1.067-.516.833-1.3 8.70-11.72 8-15.61C22 5.667 18.573
             0.9 15
              0zm0 9.11c-2.238 0-0.055-1.8-4.055-4.022 0-2.22 10-4 0-0 5.24 0 20.056 
             10.8 4.056 4.02 0 2.222-1.816 4.023-4.056 4.023
             zm0 0"
                fill="#AFB7A9"
              />
              <Circle cx="13.0" cy="8.5" r="9" fill="#AFB7A9" strokeWidth={1} />
              <Circle
                cx="13.0"
                cy="8.5"
                r="7"
                fill="#AFB7A9"
                strokeWidth={1}
                stroke={"#000"}
              />
              <Image
                x="6.5"
                y="2"
                width="13"
                height="13"
                href={require("../../../../../assets/bici.png")}
              />
            </Svg>
          ) : (
            console.log("")
          )
        }
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PingPoint;
