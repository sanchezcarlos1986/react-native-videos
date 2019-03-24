import React from 'react'
import { Text, View } from 'react-native'
import CardSet from './components/CardSet'
import cards from './data'

const App = () => (
  <View>
    <Text>BIENVENIDOS A REACT NATIVE</Text>
    <CardSet cards={cards} />
  </View>
)

export default App