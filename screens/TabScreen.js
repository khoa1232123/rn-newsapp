import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Body, Title } from 'native-base';
import Tab1 from '../components/tabs/Tab1';
import Tab2 from '../components/tabs/Tab2';
import Tab3 from '../components/tabs/Tab3';
import { StyleSheet } from 'react-native';

export default class TabScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header hasTabs style={styles.header}>
          <Body>
            <Title style={styles.title}>News App</Title>
          </Body>
        </Header>
        <Tabs
          tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
        >
          <Tab
            tabStyle={{ backgroundColor: '#009387' }}
            activeTabStyle={{ backgroundColor: '#009387' }}
            textStyle={{ color: '#fff' }}
            activeTextStyle={{ color: '#fff' }}
            heading="General"
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: '#009387' }}
            activeTabStyle={{ backgroundColor: '#009387' }}
            textStyle={{ color: '#fff' }}
            activeTextStyle={{ color: '#fff' }}
            heading="Business"
          >
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: '#009387' }}
            activeTabStyle={{ backgroundColor: '#009387' }}
            textStyle={{ color: '#fff' }}
            activeTextStyle={{ color: '#fff' }}
            heading="Technology"
          >
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009387',
  },
  header: {
    backgroundColor: '#009387',
    color: '#fff',
  },
  title: {
    color: '#fff',
  },
  tabs: {
    backgroundColor: '#009387',
  },
  tab: {
    backgroundColor: '#009387',
    color: '#fff',
  },
});
