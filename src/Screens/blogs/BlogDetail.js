import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {blog_detail} from './api_blog';
import Icon from 'react-native-vector-icons/FontAwesome';

export const BlogDetail = ({route, navigation}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const id = route.params;
    blog_detail(id)
      .then(response => {
        setBlogs(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Blog Detail</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <Icon
            name="chevron-left"
            size={15}
            color="white"
            style={styles.icon_header}
          />
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={{uri: blogs.image}} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FF0000',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 80,
  },
  button: {
    position: 'absolute',
    bottom: 7,
    zIndex: 100,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
