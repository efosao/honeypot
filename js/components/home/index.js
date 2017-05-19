
import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Badge, Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { get } from 'lodash';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import CompFooter from '../footer';
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
    const { user, name } = this.props;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          </Left>

          <Body>
            <Title>{(name) ? name : 'Home'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>

          <Content>
          <Grid>
            <Col style={{ }}>
              <Text>Gold: {get(this.props, 'user.available_points', '-')}</Text>
            </Col>
            <Col style={{ }}>
              <Image
                style={{ height: 100, width: 100, borderRadius: 50, alignSelf: 'center' }}
                source={{ uri: `https://storage.googleapis.com/honey-user-images/${user.id}.png` }} 
              />
            </Col>
        </Grid>
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
          </Content>
          <CompFooter />
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
  user: state.user.data,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Home);
