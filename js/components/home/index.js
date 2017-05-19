
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Badge, Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Footer, FooterTab } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';


class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>

          <Content>
          <Grid style={styles.mt}>
            {this.props.list.map((item, i) =>
              <Row key={i}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => this.newPage(i)}
                >
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </Row>
            )}
          </Grid>
          <Text>{this.props.name ? this.props.name : 'XXXXXXXXX'}</Text>
          <Text>{JSON.stringify(this.props.data)}</Text>
          </Content>
          <Footer >
            <FooterTab>
              <Button badge vertical>
                  <Badge><Text>2</Text></Badge>
                  <Icon name="apps" />
                  <Text>Apps</Text>
              </Button>
              <Button>
                  <Icon name="camera" />
                  <Text>Camera</Text>
              </Button>
              <Button active badge vertical>
                  <Badge ><Text>51</Text></Badge>
                  <Icon active name="navigate" />
                  <Text>Navigate</Text>
              </Button>
              <Button>
                  <Icon name="person" />
                  <Text>Contact</Text>
              </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  data: state.user.data,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Home);
