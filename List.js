import React, { Component } from 'react';
import { View, ActivityIndicator, ListView, RefreshControl, Text } from 'react-native';
import Row from './Row';

const config = {
  api_key: "USE_YOUR_API_KEY",
  image_path: "https://image.tmdb.org/t/p/w500",
  image_large_path: "https://image.tmdb.org/t/p/w600"
}

export default class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
  } 

  componentDidMount() {
    this._fetchData();
  }

  _fetchData = () => {
    this.setState({ isLoading: true });

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.api_key}&language=it-IT&page=1`)
    .then((response) => response.json())
    .then((responseJson) => {
      let data = responseJson.results.map(film => {
        return {
          title: film.title,
          rating: film.vote_average,
          image: `${config.image_path}${film.backdrop_path}`,
          large: `${config.image_path}${film.poster_path}`,
          plot: film.overview
        }
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        isLoading: false,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _renderRow = (movie) => {
    return (
      <Row
        movie={movie}
        onPress={()=>{
          this.props.navigator.navigate('Details', {movie: movie});
        }}
      />
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 40}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
}