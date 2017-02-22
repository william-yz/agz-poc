import React from 'react'
import { Row, Col } from 'antd';

import InputField from 'src/components/InputField'
const Editor = props => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <InputField />
        </Col>
        <Col span={12}>
        </Col>
      </Row>
    </div>
  )
}

export default Editor
