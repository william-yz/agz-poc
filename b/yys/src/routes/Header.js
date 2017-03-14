import React from 'react'
import { connect } from 'dva'
import { Row, Col } from 'antd'

const Header = ({normalChances, middleChances, advancedChances}) => {
  return (
    <div>
      <Row >
        <Col span={2}>
          {normalChances}
        </Col>
        <Col span={2}>
          {middleChances}
        </Col>
        <Col span={2}>
          {advancedChances}
        </Col>
      </Row>
    </div>
  )
}

export default connect(({player}) => {
  return {
    ...player
  }
})(Header)
