import React from 'react'
import {Tabs} from 'antd'
import BasicElements from './BasicElements'

const {TabPane} = Tabs
const allElements = [
  {
    type: 'text'
  },
  {
    type: 'number'
  }
]

const FieldsPanel = props => {
  return (
    <div style={{width: 220}}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Basic Elements" key="1">
          <BasicElements basicElements={allElements}/>
        </TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
      </Tabs>
    </div>
  )
}

export default FieldsPanel
