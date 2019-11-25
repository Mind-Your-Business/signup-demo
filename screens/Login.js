import React from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleEmailChange = email => {
    this.setState({ email })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  onLogin = async () => {
    let res
    try {
     res = await fetch('http://mindcraft-api.herokuapp.com/auth/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          method: 'signup'
        })
      })
     console.log(res)
  //  let user = await fetch('http://mindcraft-api.herokuapp.com/auth/me')
  //     console.log(user)
  //     // .then((response) => response.json())
  //     // .then((responseJson) => {
  //     //   if (responseJson.id) {
  //     //     this.props.navigation.navigate('App')
  //     //   }
  //     // })
    } catch (error) {
      alert(error)
    }
  }

  goToSignup = () => this.props.navigation.navigate('Signup')

  render() {
    const { email, password } = this.state

    return (
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <TextInput
            name="email"
            value={email}
            placeholder="Enter email"
            autoCapitalize="none"
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={{ margin: 10 }}>
          <TextInput
            name="password"
            value={password}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
        </View>
        <Button title="Login" onPress={this.onLogin} />
        <Button title="Go to Signup" onPress={this.goToSignup} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
