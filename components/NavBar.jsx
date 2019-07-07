import React, { Component } from 'react'

class NavBar extends Component {
  render () {
    return (
      <>
        <nav>
          <div id='logo'>
            <figure>
              <img src='../static/icons/kodemiaWhite.svg' alt='Kodemia' />
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

          #logo figure {
            margin-left: 10px;
          }

          #logo figure img {
            width: 40px;
            height: 40px;
          }

        `}</style>
      </>
    )
  }
}

export default NavBar
