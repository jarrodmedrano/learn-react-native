import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAxvMEm1EtMSxbOL1yEsY5S1kDjFeExVco',
      authDomain: 'managers-2815e.firebaseapp.com',
      databaseURL: 'https://managers-2815e.firebaseio.com',
      projectId: 'managers-2815e',
      storageBucket: 'managers-2815e.appspot.com',
      messagingSenderId: '425956334682'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
