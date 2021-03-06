import React from 'react'
import { connect } from 'dva'
import styles from './Users.css'
import UsersComponent from '../components/Users/Users'
import MainLayout from '../components/MainLayout/MainLayout'

function Users ({location}) {
  return (
    <MainLayout location={location}>
      <UsersComponent />
    </MainLayout>
  )
}

export default connect()(Users)
