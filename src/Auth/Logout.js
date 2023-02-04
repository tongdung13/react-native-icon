import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {api_logout} from './api_login';
import {Alert} from 'react-native';

const Logout = ({navigation}) => {
  useEffect(() => {
    api_logout()
      .then(response => {
        if (response.data.code == 200) {
          AsyncStorage.setItem('AccessToken', '');
          navigation.navigate('Login');
          Alert.alert(response.data.message);
        } else {
          Alert.alert('Có lỗi xảy ra');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
};

export default Logout;
