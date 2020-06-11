import React, { PureComponent } from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button,
  View,
} from 'native-base';
import moment from 'moment';

export class DataItem extends PureComponent {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({url, title});
  }
  render() {
    const { title, urlToImage, description, publishedAt, source } = this.data;
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri: urlToImage ? urlToImage : 'null',
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{title}</Text>
          <Text note numberOfLines={2} style={{ marginTop: 6 }}>
            {description}
          </Text>
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 6 }}>
            <Text note style={{ marginRight: 6 }}>
              {source.name}
            </Text>
            <Text note>{moment(publishedAt || moment.now).fromNow()}</Text>
          </View>
        </Body>
        <Right>
          <Button onPress={this.handlePress} transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default DataItem;
