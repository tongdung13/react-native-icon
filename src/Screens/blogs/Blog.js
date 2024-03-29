/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {blog_api} from './api_blog';

const Blog = ({navigation}) => {
  const [blogs, setBlogs] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    blog_api()
      .then(response => {
        if (response.data.code == 200) {
          const data = response.data.data;
          setBlogs(data);
        } else {
          Alert.alert(response.data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    blog_api()
      .then(response => {
        if (response.data.code == 200) {
          const data = response.data.data;
          setBlogs(data);
        } else {
          Alert.alert(response.data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}>Blog Screen</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Drawer')}
          style={styles.button}>
          <Icon
            name="navicon"
            size={25}
            color="white"
            style={styles.icon_header}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {Array.isArray(blogs) &&
          blogs.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('BlogDetail', {id: data.id})}
                key={index}>
                <View style={styles.row}>
                  <Image style={styles.image} source={{uri: data.image}} />
                  <Text style={styles.title1}>{data.title}</Text>
                  <Text style={styles.content}>
                    {data.content.slice(0, 50)}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  blog: {
    width: 350,
  },
  table: {
    padding: 15,
  },
  headers: {
    backgroundColor: '#6699FF',
  },
  title: {
    backgroundColor: '#FF0000',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'column',
    height: 100,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    backgroundColor: '#CCFFFF',
  },
  data: {
    fontSize: 16,
    color: '#99CC33',
    whiteSpace: 'pre-line',
  },
  image: {
    width: 100,
    height: 100,
  },
  title1: {
    position: 'absolute',
    left: 120,
    top: 8,
    fontSize: 20,
    color: 'black',
  },
  content: {
    position: 'absolute',
    left: 130,
    top: 35,
    right: 5,
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
  icon_header: {
    paddingLeft: 5,
  },
});

export default Blog;
