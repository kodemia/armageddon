
import React from 'react'

export default () => {
  return (
    <>
      <div id='dashboard-container'>
        <p>Work in progress.</p>
        <style global jsx>{`
          body, html{
            padding: 0;
            margin: 0;
            display: flex;
          }
          body, html, #__next{
            width: 100%;
            box-sizing: border-box;
            color: white;
          }
          #dashboard-container{
            width: calc(100% - 80px);
            background-color: #232323;
          }
        `}</style>
      </div>
    </>
  )
}
