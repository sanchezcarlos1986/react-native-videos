import React from 'react'
import { ScrollView  } from 'react-native'
import PropTypes from 'prop-types'

import Card from './Card'

const CardSet = ({ cards }) => {
  return (
    <ScrollView>
      {cards.map(card => <Card key={card.id} {...card} />)}
    </ScrollView>
  )
}


CardSet.propTypes = {
  cards: PropTypes.array.isRequired
}

export default CardSet