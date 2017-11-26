import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import List from './List';
import Movie from './Movie';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
    <List navigator={navigation} />
  </View>
);

const DetailsScreen = ({  navigation }) => (
  <Movie
    movie={navigation.state.params.movie}
    navigator={navigation}
  />
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Popular movies',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Movie details',
    },
  },
});

export default RootNavigator;