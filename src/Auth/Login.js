import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
// import {Controller, useForm} from 'react-hook-form';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {api_login} from './api_login';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  const [rightIcon, setRightIcon] = useState('eye');
  const togglePasswordVisibility = () => {
    setPasswordShow(passwordShow ? false : true);
    if (passwordShow == false) {
      setRightIcon('eye-slash');
    } else {
      setRightIcon('eye');
    }
  };

  const onSubmit = () => {
    api_login({
      email,
      password,
    })
      .then(response => {
        if (response.data.code == 200) {
          AsyncStorage.setItem('AccessToken', response.data.data.token);
          navigation.navigate('Blog');
          Alert.alert('Đăng nhập thành công');
        } else {
          Alert.alert(response.data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View>
        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={newEmail => setEmail(newEmail)}
          value={email}
        />
      </View>

      <View style={styles.textBoxParent}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={newPassword => setPassword(newPassword)}
          value={password}
          autoCorrect={false}
          secureTextEntry={passwordShow ? false : true}
          textContentType="password"
        />
        <TouchableOpacity
          onPress={() => togglePasswordVisibility()}
          activeOpacity={0.8}
          style={styles.visibilityBtn}>
          <Icon name={rightIcon} fontSize={35} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => onSubmit()} style={styles.button}>
        <Text style={styles.submit}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 30,
    color: 'darkcyan',
  },
  label: {
    color: 'black',
    margin: 10,
    marginLeft: 0,
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    paddingLeft: 14,
    borderRadius: 50,
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 30,
  },
  submit: {
    fontSize: 20,
    color: 'white',
  },
  textBoxParent: {
    justifyContent: 'center',
  },
  visibilityBtn: {
    position: 'absolute',
    right: 9,
    bottom: 9,
    zIndex: 100,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
