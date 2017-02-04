import React from 'react'
import InputProperty from './inputProperty'

const PropertyEditor = ({metas, type}) => {
  switch (type) {
    case 'input':
      return (<InputProperty />)
    default:
      return (<div>Empty</div>)
  }
}
export default PropertyEditor
