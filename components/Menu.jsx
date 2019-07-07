import React, { Component } from 'react'
import Link from 'next/link'

import menuList from '../config/menu'
class Menu extends Component {

  _buildMenuItems = () => {
    return menuList.map((item, count) => {
      return (
        <li
          key={`item${count}`}
          className="menu-item"
        >
          <img src={item.icon} alt={item.alt} />
          <style jsx>{`
            .menu-item {
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0;
            }

            .menu-item img {
              padding: 10px 10px;  
              transition: .3s ease-in all;
            }

            .menu-item:hover img {
              transform: scale(1.1);
            }
          `}</style>
        </li>
      )
    })
  }

  render() {
    return (
      <>
        <style jsx>{`
          #menu {
            background-color: #232323;
            width: 80px;
            padding: 0;
          }

          #menu ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}</style>
        <div id='menu'>
          <ul>
            {this._buildMenuItems()}
          </ul>
        </div>
      </>
    )
  }
}

export default Menu
