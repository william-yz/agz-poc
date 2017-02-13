import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {Input, InputNumber, Form, Checkbox} from 'antd'
const FormItem = Form.Item
const InputNumberProperty = ({form, metas}) => {
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
      <FormItem
        label="默认值">
        {getFieldDecorator('defaultValue',{
          })(
            <InputNumber />
          )}
      </FormItem>
      <FormItem
        label="最小值">
        {getFieldDecorator('min',{
          })(
            <InputNumber />
          )}
      </FormItem>
      <FormItem
        label="最大值">
        {getFieldDecorator('max',{
          })(
            <InputNumber />
          )}
      </FormItem>
    </Form>
  )
}

InputNumberProperty.propTypes = {
  form: PropTypes.any.isRequired,
  metas: PropTypes.shape({
    number: PropTypes.shape({
      label: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
      defaultValue: PropTypes.string,
      min: PropTypes.number,
      max: PropTypes.number
    }).isRequired
  }).isRequired
}
const onFieldsChange = ({metas, onFieldChange}, fields) => {
  var number = metas.number
  for (var fieldName in fields) {
    onFieldChange({
      number: {
        ...number,
        [fieldName]: fields[fieldName].value
      }
    })
  }
}
const mapPropsToFields = ({metas, type}) => {
  const meta = metas.number
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({onFieldsChange, mapPropsToFields})(InputNumberProperty))
