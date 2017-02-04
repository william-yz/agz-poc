import React from 'react'
import { Input } from 'antd';

const BasicElements = ({basicElements}) => {
  return (
    <div>
      {basicElements.map(basicElement => (
        <Input type={basicElement.type} />
      ))}
    </div>
  )
}

export default BasicElements
