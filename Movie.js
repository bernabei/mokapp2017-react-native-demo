import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Movie extends Component {
    
  render({ movie } = this.props) {
    const { title, rating, large, plot } = movie;
    return (
      <View style={styles.container}>
        <Image source={{uri: large}} style={styles.imageBackground}>
          <ScrollView style={{flex: 1}}>
            <Text style={[styles.text, styles.title]}>{title.toUpperCase()}</Text>
            <View style={styles.rating}>
              <Image
                source={{uri: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-128.png'}}
                style={styles.icon} />
              <Text style={[styles.text, styles.value]}>{rating}</Text>
            </View>
            <View style={styles.plot}>
              <Text style={styles.plotText}>{plot}</Text>
            </View>
          </ScrollView>
          {/* <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {this.props.navigator.goBack(null);}}
              activeOpacity={0.7}
              style={styles.button}>
              <Text style={styles.buttonText}>CLOSE</Text>
            </TouchableOpacity>
          </View> */}
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
    },
    imageBackground: {
      flex: 1,
      padding: 20
    },
    text: {
      backgroundColor: 'transparent',
      color: '#fff',
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      // text shadow
      textShadowColor: '#222',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 4,
    },
    title: {
      fontSize: 22,
      marginTop: 30,
      marginBottom: 5,
      textAlign: 'center',
    },
    rating: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    icon: {
      width: 22,
      height: 22,
      marginRight: 5,
    },
    value: {
      fontSize: 16,
    },
    plot: {
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderRadius: 10,
      marginTop: 40,
      padding: 10,
    },
    plotText: {
      color: '#333',
      fontFamily: 'Avenir',
      fontSize: 15,
    },
    buttonContainer: {
      marginTop: 20,
    },
    button: {
      backgroundColor: '#617D8A',
      padding: 15
    },
    buttonText: {
      color: '#fff',
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      textAlign: 'center',
    }
  });      