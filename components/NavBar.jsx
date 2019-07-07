import React, { Component } from 'react'
import Link from 'next/link'
class NavBar extends Component {
  render() {
    return (
      <>
        <nav>
          <div id='logo'>
            <figure>
              <img src="../static/icons/kodemia.svg" alt="Kodemia" />
            </figure>
          </div>
          <div>
            Work in progress.
          </div>
        </nav>
        <style jsx>{`
          
          nav {
            background-color: black;  
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 10px;
          }

        `}</style>
      </>
    )
  }
}

export default NavBar
