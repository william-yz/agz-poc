import React from 'react'
import {connect} from 'react-redux'
import { Input, InputNumber, Checkbox, Select, Button, Card, Form } from 'antd';
const FormItem = Form.Item,
  CheckboxGroup = Checkbox.Group

const FieldsCanvas = ({onClickEdit, metas}) => {
  const edit = type => () => {
    onClickEdit(type)
  }
  const {input, number, checkbox} = metas
  return (
    <div>
      <Card title="文本框"
        extra={(<Button type="primary" onClick={edit('input')}>编辑</Button>)}>
        <FormItem
          label={input.label}
          required={input.isRequired}
          hasFeedback
        >
          <Input value={input.defaultValue}/>
        </FormItem>
      </Card>
      <Card title="数字"
        extra={(<Button type="primary" onClick={edit('number')}>编辑</Button>)}>
        <FormItem
          label={number.label}
          required={number.isRequired}
          hasFeedback
        >
          <InputNumber value={number.defaultValue} min={number.min} max={number.max}/>
        </FormItem>
      </Card>
      <Card title="多选框"
        extra={(<Button type="primary" onClick={edit('checkbox')}>编辑</Button>)}>
        <FormItem
          label={checkbox.label}
          hasFeedback
        >
          <CheckboxGroup value={checkbox.defaultValue} options={checkbox.options}/>
        </FormItem>
      </Card>
      <Card title="下拉框"
        extra={(<Button type="primary" onClick={edit('select')}>编辑</Button>)}>
        <Select />
      </Card>
      <Card title="按钮"
        extra={(<Button type="primary" onClick={edit('button')}>编辑</Button>)}>
        <Button />
      </Card>
    </div>
  )
}

const mapStateToProps = state => {
  return {metas: state.property.metas}
}
export default connect(mapStateToProps)(FieldsCanvas)
