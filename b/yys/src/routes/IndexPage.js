import React from 'react'
import { connect } from 'dva'
import { Tabs, Layout } from 'antd'
const TabPane = Tabs.TabPane

import Drawer from './Drawer'
import Header from './Header'
import './IndexPage.css'

const IndexPage = ({ location }) => {
  return (
    <Layout className="card-container">
      <Layout.Header className="header"><Header /></Layout.Header>
      <Layout.Content>
        <Tabs type="card">
          <TabPane tab="Tab 1" key="1"><Drawer /></TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </Layout.Content>
    </Layout>
  )
}

IndexPage.propTypes = {
}

export default connect()(IndexPage)
