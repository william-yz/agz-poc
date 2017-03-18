import React from 'react'
import { connect } from 'dva'
import { Button, message } from 'antd'

import draw from '../models/draw/draw'

//normalChances, middleChances, advancedChances
const Drawer = ({ dispatch, player}) => {
  const onDraw = type => () => {
    const cards = player[type + 'Chances']
    if (cards > 0) {
      dispatch({
        type: 'player/updateChances',
        payload: {
          type,
          number: -1
        }
      })
      const Card = draw[type]()
      dispatch({
        type: 'card/add',
        payload: {
          card: new Card()
        }
      })
      message.info(Card.cardName)
    } else {
      message.info('No cards')
    }
  }


  return (
    <div>
      <Button onClick={onDraw('normal')}>Normal Draw</Button>
      <Button onClick={onDraw('middle')}>Middle Draw</Button>
      <Button onClick={onDraw('advanced')}>Advanced Draw</Button>
    </div>
  )
}

export default connect(({player}) => {
  return {
    player
  }
})(Drawer)
