import React from 'react'

import CardDetail from './CardDetail'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane

function CardList({ cards, children }) {
  return (
    <Tabs
      title="Card List"
      tabPosition="left"
    >
      {cards.map(card => (
        <TabPane tab={card.name} key={card.id}>
          <CardDetail card={card} />
        </TabPane>
      ))}
    </Tabs>
  )
}

export default CardList
