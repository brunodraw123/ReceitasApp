import { ServerContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class Redirect extends Component {

  render() {
    let { container, button } = style

    return (
      <View style={container}>
        <Text> Bem vindo a tela de redirecionamento.</Text>
      </View>

    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D105f7',
    padding: 10,
    width: 200,
    marginTop: 12

  }
}

)
