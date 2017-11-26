import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Dimensions from 'Dimensions';

// Detect screen size to calculate row height
const screen = Dimensions.get('window');

export default class Row extends Component {
    
  render({ movie, onPress } = this.props) {
    const { title, rating, image, overview } = movie;
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={onPress}
        activeOpacity={0.7}>
        {/* Background image */}
        <Image source={{uri: image}} style={styles.imageBackground}>
          {/* Title */}
          <Text style={[styles.text, styles.title]}>{title.toUpperCase()}</Text>
          {/* Rating */}
          <View style={styles.rating}>
            <Image
              source={{uri: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-128.png'}}
              style={styles.icon} />
            {/* Value */}
            <Text style={[styles.text, styles.value]}>{rating}</Text>
          </View>
        </Image>
      </TouchableOpacity>
    );
  }    
}

const styles = StyleSheet.create({
    row: {
      paddingBottom: 4,
    },
    imageBackground: {
      height: screen.height / 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      backgroundColor: 'transparent',
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      // text shadow
      textShadowColor: '#222',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,
    },
    title: {
      fontSize: 22,
    },
    rating: {
      flexDirection: 'row',
    },
    icon: {
      width: 22,
      height: 22,
      marginRight: 5,
    },
    value: {
      fontSize: 16,
    },
  });