import React, { Component } from 'react';
import { Badge, Text, Button, Icon, Footer, FooterTab } from 'native-base';
import { Image } from 'react-native';
const IMAGES_RELATIVE = '../../../images';
import SvgUri from 'react-native-svg-uri';

const styles = {
  main: {
    backgroundColor: '#dfdfdf',
  },
  image: {
    width: 24,
    height: 30,
  },
};

class CompFooter extends Component {
  render() {
    return (
      <Footer style={styles.main}>
        <FooterTab>
          <Button active badge vertical>
            <Badge><Text>2</Text></Badge>
            <Image style={styles.image} source={ require('../../../images/heart-active.png') } />
            <Text>Gold</Text>
          </Button>
          <Button>
            <Image style={styles.image} source={ require('../../../images/alarm.png') } />
            <Text>Drop List</Text>
          </Button>
          <Button badge vertical>
            <Badge><Text>51</Text></Badge>
            <Image style={styles.image} source={ require('../../../images/person.png') } />
            <Text>Offers</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default CompFooter;
