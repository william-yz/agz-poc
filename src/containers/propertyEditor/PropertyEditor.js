import React from 'react'
import InputProperty from './inputProperty'
import InputNumberProperty from './inputNumberProperty'
import CheckboxProperty from './checkboxProperty'

const PropertyEditor = ({metas, type}) => {
  switch (type) {
    case 'input':
      return (<InputProperty />)
    case 'number':
      return (<InputNumberProperty />)
    case 'checkbox':
      return (<CheckboxProperty />)
    default:
      return (<div>Empty</div>)
  }
}
export default PropertyEditor
