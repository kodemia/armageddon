import React, { Component } from 'react'
import Link from 'next/link'
class Menu extends Component {
  render() {
    return (
      <>
        <div id='menu'>Menu bitch</div>
        <style jsx>{`
          
          #menu {
            background-color: #232323;
            width: 80px;
            padding: 10px;
          }

        `}</style>
      </>
    )
  }
}

export default Menu
