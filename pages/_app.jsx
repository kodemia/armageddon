import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'

import NavBar from '../components/NavBar'
import Menu from '../components/Menu'


class ArmageddonApp extends App {
  componentDidMount () {
    const authed = sessionStorage.getItem('access_token') || localStorage.getItem('access_token')
    const { route } = this.props.router

    const isToSignIn = route === '/sing-in'

    if (!authed && !isToSignIn) Router.replace('/sign-in')
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container >
        <NavBar />
        <div id='main'>
          <style jsx>{`
            #main{
              display: flex;
              flex-direction: row;
              height: calc(100vh - 80px);
            }
          `}</style>
          <Menu />
          <Component {...pageProps} />
        </div>
      </Container>
    )
  }
}

export default ArmageddonApp
