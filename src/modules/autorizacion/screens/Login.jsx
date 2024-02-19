import { StyleSheet, View } from 'react-native'
import React ,{ useState } from 'react'
import { Input, Image, Icon, Button } from '@rneui/base';
import Logo from '../../../../assets/logo.png';
import { isEmpty } from 'lodash';

export default function Login(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showMessage, setShowMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const login = async () => {
    if (!isEmpty(email) && !isEmpty(password)) {
      setShowMessage('');
      setVisible(true);
      try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response.user);
      } catch (error) {
        console.log("error", error);
      } finally {
        setVisible(false);
      }
    } else {
      setShowMessage('Campos obligatorios');
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
        resizeMethod="contain"
      />
      <Input
        placeholder="erick@utez.edu.mx"
        label="Matricula: "
        keyboardType="email-address"
        // Esto es un callback function
        onChange={({ nativeEvent: { text } }) => setEmail(text)}
        labelStyle={styles.label}
        containerStyle={styles.input}
        errorMessage={showMessage}
        leftIcon={
          <Icon
            type='material-community'
            name={showMessage ? 'account-outline' : 'account'}
          />
        }
      />

      <Input
        placeholder="*****"
        label="Contraseña: "
        // Esto es un callback function
        onChange={({ nativeEvent: { text } }) => setPassword(text)}
        labelStyle={styles.label}
        containerStyle={styles.input}
        secureTextEntry={showPassword}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            color='black'
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        leftIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'lock-outline' : 'lock'}
          />
        }
        errorMessage={showMessage}
      />
      <Button
        title="¿Olvidaste tu contraseña?"
        type='clear'
        containerStyle={styles.container2}
        buttonStyle={styles.btnStyle2}
        onPress={() => navigation.navigate('Contra')}
      />
      <Button
        title='Iniciar Sesión'
        onPress={login}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        titleStyle={{ color: "white" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  container2: {
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 8
  },
  input: {
    paddingHorizontal: 16,
    marginVertical: 8,

  },
  label: {
    color: '#002E60',
  },
  btnStyle: {
    backgroundColor: '#002E60',
    color: '#000',
    borderRadius: 50
  },
  btnContainer: {
    width: '80%',
  }
})

