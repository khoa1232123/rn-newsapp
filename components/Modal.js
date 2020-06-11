import React, { PureComponent } from 'react';
import { Modal, Dimensions, Share } from 'react-native';
import WebView from 'react-native-webview';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Content,
} from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;

export class ModalComponent extends PureComponent {
  handleClose = () => {
    return this.props.onClose();
  };
  handleShare = () => {
    const { url, title } = this.props.articleData;
    const message = `${title}\n\n Read more @\n\nShared via RN News app`;
    return Share.share(
      { title, message, url: message },
      {dialogTitle: `Share ${title}`}
    )
  };
  render() {
    const {
      showModal,
      articleData: { url, title },
    } = this.props;
    if(url != undefined ) {
    return (
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={this.handleClose}
      >
        <Container  style={{ margin: 15, marginBottom: 0, backgroundColor: '#fff' }}>
          <Header  style={{ backgroundColor: '#009387' }}>
            <Left>
              <Button onPress={this.handleClose} transparent>
                <Icon name="close" style={{ color: '#fff', fontSize: 36 }} />
              </Button>
            </Left>
            <Body>
              <Title children={title} style={{ color: '#fff' }} />
            </Body>
            <Right>
              <Button onPress={this.handleShare} transparent>
                <Icon name="share" style={{ color: '#fff', fontSize: 24 }} />
              </Button>
            </Right>
          </Header>
          <Content contentContainerStyle={{height: webViewHeight}}>
            <WebView
              source={{ uri: url }}
              style={{ flex: 1 }}
              onError={this.handleClose}
              startInLoadingState
              scalesPageToFit
            />
          </Content>
        </Container>
      </Modal>
      );
    } else {
      return null;
    }
  }
}

export default ModalComponent;
