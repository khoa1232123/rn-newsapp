import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  Text,
  View,
} from 'native-base';

import { getArticles } from '../../service/news';
import { Alert, ActivityIndicator } from 'react-native';
import DataItem from '../DataItem';
import ModalComponent from '../Modal';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    };
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    })
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    })
  }

  componentDidMount() {
    getArticles('technology').then(
      (data) => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      (error) => {
        Alert.alert('Error', 'Something went wrong!!!');
      }
    );
  }

  render() {
    console.log(this.state.data);
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator
          style={{ marginTop: 20 }}
          animating={this.state.isLoading}
        />
        <Text style={{ marginTop: 10, textAlign: 'center' }}>
          Please wait...
        </Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItem onPress={this.handleItemDataOnPress} data={item} />;
        }}
      />
    );
    return (
      <Container>
        <Content>{view}</Content>
        <ModalComponent
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
