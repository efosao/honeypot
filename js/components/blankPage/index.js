
import React, { Component } from 'react';
import { WebView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class BlankPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  render() {
    const { props: { name, index, list } } = this;

    let jsCode = `
      var parent = document.querySelector('#unifiedPrice_feature_div');
      var p = document.createElement("p");
      p.append("----> Honey Savings <----");
      parent.appendChild(p);
      parent.style.backgroundColor = 'yellow';
      parent.style.color = 'red';
    `;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>{(name) ? this.props.name : 'Blank Page'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>


        <Content padder>
          <WebView
            source={{uri: 'https://www.amazon.com/gp/product/B01M18UZF5/ref=s9_acss_bw_cg_cegwcacl_2c1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=unified-hybrid-3&pf_rd_r=W5XHW3RGA2ASVA8CNW6W&pf_rd_t=101&pf_rd_p=8bf99254-28ca-4da6-b713-a13668db6d1a&pf_rd_i=565108'}}
            style={{marginTop: 10, height: 560 }}
            injectedJavaScript={jsCode}
          />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(BlankPage);
