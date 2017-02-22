import React, { Component } from 'react' // 引入React
import { Link } from 'react-router' // 引入Link处理导航跳转

import { Layout, Menu } from 'antd'
const { Sider, Content } = Layout
const { Item, ItemGroup } = Menu

const App = ({children}) => {
  console.log(children)
  return (
    <div>
      {{children}}
    </div>
  )
}

export default App
