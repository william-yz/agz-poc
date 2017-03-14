import React, { Component } from 'react' // 引入React
import { Link } from 'react-router' // 引入Link处理导航跳转

import { Layout, Menu } from 'antd'
const { Sider, Content } = Layout
const { Item, ItemGroup } = Menu

import { Nav } from '../components'

const navs = [{
    title: 'hhh',
    children: [{
      key: 'home',
      to: 'home',
      name: 'Home'
    },{
      key: 'grid',
      to: 'grid',
      name: 'Grid'
    }]
  }]

const App = ({children}) => {
  return (
    <Layout>
      <Sider
        collapsible="true">
        <Nav navs={navs}></Nav>
      </Sider>
      <Content>
        { children }
      </Content>
    </Layout>
  )
}

export default App
