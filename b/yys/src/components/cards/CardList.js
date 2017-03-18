import React from 'react'

import CardDetail from './CardDetail'
import { Tabs, Button } from 'antd'

const TabPane = Tabs.TabPane

function CardList({ cards, children }) {
  return (
    <div>
      <Tabs
        title="Card List"
      >
        {cards.map(card => (
          <TabPane tab={card.name} key={card.id}>
            <CardDetail card={card} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default CardList
