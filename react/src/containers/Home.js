import React, { Component } from 'react'
import { connect } from 'react-redux'
import FieldsPanel from './fieldsPanel/FieldsPanel'
import FieldsCanvas from './fieldsCanvas/FieldsCanvas'
import PropertyEditor from './propertyEditor/PropertyEditor'

import { Affix, Layout } from 'antd';
const {Sider, Content} = Layout

class Home extends React.Component {

  constructor () {
    super()
    this.state = {
      metaType: 'input'
    }
  }
  onClickEdit (type) {
    this.setState({
      metaType: type
    })
  }
  render () {
    return (
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>
          <FieldsCanvas onClickEdit={::this.onClickEdit}/>
        </Content>
        <Sider style={{background: '#fff'}}>
          <PropertyEditor type={this.state.metaType}/>
        </Sider>
      </Layout>
    )
  }

}

export default Home
