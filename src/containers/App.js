import React, { Component } from 'react' // 引入React
import { Link } from 'react-router' // 引入Link处理导航跳转

import { Layout, Menu } from 'antd'
const { Sider, Content } = Layout
const { Item, ItemGroup } = Menu

import Nav from '../components/nav'

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

export default class App extends Component {
  render() {
    return(
      <Layout>
        <Sider
          style={{height: '600px'}}>
          <Nav navs={navs}></Nav>
        </Sider>
        <Content
          style={{height: '600px'}}>
          { this.props.children }
        </Content>
      </Layout>
    )
  }
}
