import React from 'react'
import { CustomGrid } from '../../components'

const datas = [{
  id: '1',
  a: '123'
}, {
  id: '2',
  a: 'aaa'
}]

class Grid extends React.Component {
  constructor () {
    super()
    this.state = {
      datas: []
    }
  }

  componentDidMount () {
    fetch('http://dev01.demo.com:8080/runtime/business/data/plugin/CZCJ0009',
     {method: 'POST',
      headers: new Headers({
        Authorization: 'previewToken'
      }),
      body: '{"data":[{"main":{"boID":"2194ddaf-746a-49d7-82c7-73fe9026a8ed","boName":"BH_XJXQY_2"},"sub":{},"where":[],"limit":{"$no":1,"$size":10}}],"appID":"a685862e-d160-49f3-9265-bfc09ecf30ea"}'})
      .then(res => {
        return res.json()
      })
      .then(body => {
        this.setState({
          datas: body.result[0].data
        })
      })
  }

  render () {
    return (
      <CustomGrid datas={this.state.datas}>
      </CustomGrid>
    )
  }
}


export default Grid
