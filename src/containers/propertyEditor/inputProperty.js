import React from 'react'
import {connect} from 'react-redux'

import {Input, Form, Checkbox} from 'antd'
const FormItem = Form.Item
const InputProperty = ({form, metas}) => {
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

const onFieldsChange = ({metas, onFieldChange}, fields) => {
  var input = metas.input
  for (var fieldName in fields) {
    onFieldChange({
      input: {
        ...input,
        [fieldName]: fields[fieldName].value
      }
    })
  }
}
const mapPropsToFields = ({metas, type}) => {
  const meta = metas.input
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({onFieldsChange, mapPropsToFields})(InputProperty))
