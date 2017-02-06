import React, { Component, PropTypes } from 'react'
import { Menu } from 'antd'
const { Item, SubMenu } = Menu
import { Link } from 'react-router'

const Nav = ({navs}) => {
  return (
      <Menu
        theme="dark"
        mode="inline">
        {
          navs.map(nav => (
            <SubMenu title={nav.title} key={nav.title}>
              {
                nav.children.map(child => (
                  <Item key={child.key}>
                    <Link to={child.to}>{child.name}</Link>
                  </Item>
                ))
              }
            </SubMenu>
            ))
          }
      </Menu>
      )
}
export default Nav

Nav.propTypes = {
  navs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
  })).isRequired
}
