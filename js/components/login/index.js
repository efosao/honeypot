
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { loginUser } from '../../actions/user';
import styles from './styles';


const background = require('../../../images/shadow.png');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  setUser(name) {
    this.props.setUser(name);
  }

  login() {
    this.props.loginUser(this.state.name, this.state.password);
    Actions.home();
  }


  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input placeholder="EMAIL"
                    onChangeText={name => this.setState({ name })} />
                </Item>
                <Item style={styles.input}>
                  <Icon name="unlock" />
                  <Input
                    onChangeText={password => this.setState({ password })}
                    placeholder="PASSWORD"
                    secureTextEntry
                  />
                </Item>
                <Button style={styles.btn} onPress={() => this.login()}>
                  <Text>Login</Text>
                </Button>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    loginUser: name => dispatch(loginUser(name)),
  };
}


export default connect(null, bindActions)(Login);
