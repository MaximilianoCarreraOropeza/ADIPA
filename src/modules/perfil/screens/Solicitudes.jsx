import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { getPetition, postUsuario, postPersona, deletePetition, getAll } from "../../../kernel/config/use_connection";
import Loading from '../../../kernel/components/Loading';
import Message from '../../../kernel/components/Message';

export default function Solicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [forceRender, setForceRender] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);

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
      .catch(() => {
        setTimeout(() => {
          setVisible(false);
          setError(!error);
        }, 1000);
      });
  }, [forceRender]);

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
        setVisible(!visible)
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
                              setTimeout(() => {
                                setVisible(false);
                                setSuccess(!success);
                              }, 1000);
                              setTimeout(() => {
                                setSuccess(false);
                              }, 2000);
                            } else {
                              setTimeout(() => {
                                setVisible(false);
                                setError(!error);
                              }, 1000);
                            }
                          })
                          .catch(() => {
                            setTimeout(() => {
                              setVisible(false);
                              setError(!error);
                            }, 1000);
                          });
                      } else {
                        setTimeout(() => {
                          setVisible(false);
                          setError(!error);
                        }, 1000);
                      }
                    })
                    .catch(() => {
                      setTimeout(() => {
                        setVisible(false);
                        setError(!error);
                      }, 1000);
                    });
                } else {
                  setTimeout(() => {
                    setVisible(false);
                    setError(!error);
                  }, 1000);
                }
              })
              .catch();
          } else {
            setTimeout(() => {
              setVisible(false);
              setError(!error);
            }, 1000);
          }
        }
      })
      .catch(() => {
        setTimeout(() => {
          setVisible(false);
          setError(!error);
        }, 1000);
      });
  };

  const denegarSolicitud = (item) => {
    setVisible(!visible);
    const idDelete = item.id_externo;
    deletePetition(idDelete)
    .then(
      (response) => {
      if(response.status === "OK"){
        setForceRender(prev => !prev)
        setTimeout(() => {
          setVisible(false);
          setWarning(!warning);
        }, 1000);
      } else {
        setTimeout(() => {
          setVisible(false);
          setError(!error);
        }, 1000);
      }
    }
    ).catch(
      () => {
        setTimeout(() => {
          setVisible(false);
          setError(!error);
        }, 1000);
      }
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
        <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={() => denegarSolicitud(item)}
            style={styles.btnRechazar}
            underlayColor="#D63D39">
            <Text style={styles.btnText}>Rechazar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => aceptarSolicitud(item)}
            style={styles.btnAceptar}
            underlayColor="rgba(111, 202, 186, 0.8)">
            <Text style={styles.btnText}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
    keyExtractor={(item) => item.id_externo}
  />
  <Loading visible={visible} title="cargando solicitud" />
      <Message
        type={"error"}
        visible={error}
        setVisible={setError}
        title="Error al cargar las solicitudes"
      />
      <Message
        type={"warning"}
        visible={warning}
        setVisible={setWarning}
        title="Solicitud Rechazada"
      />
      <Message
        type={"success"}
        visible={success}
        setVisible={setSuccess}
        title="Solicitud Aceptada"
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
    flexDirection: 'column',
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
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnRechazar: {
    backgroundColor: '#D63D39',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    width: 100,
  },
  btnAceptar: {
    backgroundColor: 'rgba(111, 202, 186, 1)',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    width: 100
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});