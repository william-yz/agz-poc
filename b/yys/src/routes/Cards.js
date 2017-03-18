import React from 'react'
import { connect } from 'dva'

import CardList from '../components/cards/CardList'

function Cards({ cards }) {
  console.log(cards)
  return (
    <div>
      <CardList cards={cards} />
    </div>
  )
}

const mapStateToProps = ({ card: { cards } }) => {
  return {
    cards
  }
}
export default connect(mapStateToProps)(Cards)
