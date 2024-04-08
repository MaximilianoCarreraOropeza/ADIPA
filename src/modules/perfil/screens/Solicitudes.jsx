// Importa useState y useEffect al principio del archivo
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { getPetition, postUsuario, postPersona, deletePetition, getAll } from "../../../kernel/config/use_connection";

export default function Solicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [forceRender, setForceRender] = useState(false); 

  useEffect(() => {
    getPetition()
      .then((response) => {
        if (response.status === "OK") {
          const tempSoli = response.data;
          setSolicitudes(tempSoli);
        } else {
          console.log("Algo salió mal");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [forceRender]); // 

  const aceptarSolicitud = (item) => {
    const idDelete = item.id_externo;
    const nom1 = item.nombre1;
    const nom2 = item.nombre2;
    const apm = item.apellido_m;
    const apP = item.apellido_p;
    const iUsuario = item.usuario;
    const iContrasena = item.contrasena;

    getAll()
      .then((response) => {
        if (response.status === "OK") {
          const longitud = response.data;
          const idUbi = longitud.length - 1;
          const idU = response.data[idUbi].id_usuario;
          if (idU != null) {
            postUsuario({
              matricula: iUsuario,
              contrasena: iContrasena,
              tipo_id: 4
            })
              .then((response) => {
                if (response.status === "OK") {
                  postPersona({
                    nombre1: nom1,
                    nombre2: nom2,
                    apellido_p: apP,
                    apellido_m: apm,
                    usuario_id: idU
                  })
                    .then((response) => {
                      if (response.status === "OK") {
                        deletePetition(idDelete)
                          .then((response) => {
                            if (response.status === "OK") {
                              setForceRender(prev => !prev);
                            } else {
                              console.log("Ocurrió un error al eliminar la petición");
                              console.log(response);
                            }
                          })
                          .catch((error) => console.error("Ocurrió un error al eliminar la petición", error));
                      } else {
                        console.log("Ocurrió un error al registrar persona", response);
                      }
                    })
                    .catch((error) => console.error(`Ocurrió un error al agregar a la persona ${error}`));
                } else {
                  console.log(`Ocurrió un error al insertar un usuario`);
                }
              })
              .catch();
          } else {
            console.log(`Algo ocurrió mal al buscar los usuarios`);
          }
        }
      })
      .catch((error) => console.error(error));
  };

  const denegarSolicitud = (item) => {
    const idDelete = item.id_externo;
    deletePetition(idDelete)
    .then(
      (response) => {
      if(response.status === "OK"){
        setForceRender(prev => !prev)
      } else {
        console.error("Ocurrió un error al eliminar la petición")
      }
    }
    ).catch(
      (error) => console.error(error)
    );

  };

  return (
    <View style={styles.container}>
      <FlatList
        data={solicitudes}
        renderItem={({ item }) => (
          <View style={styles.containerView}>
            <View style={styles.text}>
              <Text style={styles.usuario}>{item.nombre1} {item.nombre2} {item.apellido_p} {item.apellido_m}</Text>
            </View>
            <Button
              title="Aceptar"
              onPress={() => aceptarSolicitud(item)}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
                margin: 5,
                padding: 5
              }}
            />
            <Button
              title="Rechazar"
              onPress={() => denegarSolicitud(item)}
              buttonStyle={{
                backgroundColor: 'rgba(214, 61, 57, 1)',
                borderRadius: 5,
                margin: 5,
                padding: 5
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id_externo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  containerView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android
    elevation: 3,
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  text: {
    padding: 5,
    margin: 5,
  },
  usuario: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
