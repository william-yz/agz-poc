import React from 'react'
import Column from './Column'
import { Table } from 'antd'

const initColumns = (schema) => {

  return [new Column({
    title: 'a',
    dataIndex: 'BH_XJXQY_2.BH_XJXQY_2WB',
    key: 'BH_XJXQY_2.BH_XJXQY_2WB'
  })];
}

const CustomGrid = ({config, datas}, b) => {
  const columns = initColumns()
  return (
    <Table
      columns={columns}
      rowKey={record => record.id}
      dataSource={datas}
    />
  )
}

export default CustomGrid
