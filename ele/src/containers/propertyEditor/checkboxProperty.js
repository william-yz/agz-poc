import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {Input, Form, Checkbox} from 'antd'
const FormItem = Form.Item
const CheckboxProperty = ({form, metas}) => {
  const { getFieldDecorator } = form
  return (
    <Form>
      <FormItem
        label="标签">
        {getFieldDecorator('label',{
          })(
            <Input />
          )}
      </FormItem>
      <FormItem
        label="是否必填">
        {getFieldDecorator('isRequired',{
          })(
            <Checkbox />
          )}
      </FormItem>
    </Form>
  )
}

CheckboxProperty.propTypes = {
  form: PropTypes.any.isRequired,
  metas: PropTypes.shape({
    checkbox: PropTypes.shape({
      label: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool
      })),
      defaultValue: PropTypes.string
    }).isRequired
  }).isRequired
}
const onFieldsChange = ({metas, onFieldChange}, fields) => {
  var checkbox = metas.checkbox
  for (var fieldName in fields) {
    onFieldChange({
      checkbox: {
        ...checkbox,
        [fieldName]: fields[fieldName].value
      }
    })
  }
}
const mapPropsToFields = ({metas, type}) => {
  const meta = metas.checkbox
  var fields = {}
  for (var fieldName in meta) {
    fields[fieldName] = {
      name: fieldName,
      value: meta[fieldName]
    }
  }
  return fields
}

const mapStateToProps = state => {
  return {metas: state.property.metas}
}

function mapDispatchToProps(dispatch) {
  return {
    onFieldChange: (metas) => dispatch({type: 'UPDATE_PROPERTY', payload: metas})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({onFieldsChange, mapPropsToFields})(CheckboxProperty))
