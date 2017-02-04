import React from 'react'
import {connect} from 'react-redux'
import { Input, InputNumber, Checkbox, Select, Button, Card, Form } from 'antd';
const FormItem = Form.Item


const FieldsCanvas = ({onClickEdit, metas}) => {
  const edit = type => () => {
    onClickEdit(type)
  }
  const {input} = metas
  return (
    <div>
      <Card title="文本框"
        extra={(<Button type="primary" onClick={edit('input')}>编辑</Button>)}>
        <FormItem
          label={input.label}
          required={input.isRequired}
          hasFeedback
        >
          <Input />
        </FormItem>
      </Card>
      <Card title="数字"
        extra={(<Button type="primary" onClick={edit('number')}>编辑</Button>)}>
        <InputNumber />
      </Card>
      <Card title="多选框"
        extra={(<Button type="primary" onClick={edit('checkbox')}>编辑</Button>)}>
        <Checkbox />
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
