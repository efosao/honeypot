import React, { Component } from 'react';
import { Badge, Text, Button, Icon, Footer, FooterTab } from 'native-base';

class CompFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon active name="apps" />
              <Text>Gold</Text>
          </Button>
          <Button>
              <Icon name="camera" />
              <Text>Drop List</Text>
          </Button>
          <Button badge vertical>
              <Badge><Text>51</Text></Badge>
              <Icon name="bookmark" />
              <Text>Offers</Text>
          </Button>
          <Button>
              <Icon name="person" />
              <Text>Prefs</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default CompFooter;
