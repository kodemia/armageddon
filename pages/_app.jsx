import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'

import NavBar from '../components/NavBar'

class ArmageddonApp extends App {
  componentDidMount () {
    const authed = sessionStorage.getItem('access_token') || localStorage.getItem('access_token')
    const { route } = this.props.router

    const isToSignIn = route === '/sing-in'

    if (!authed && !isToSignIn) Router.replace('/sign-in')
  }

  render () {
    const { Component, pageProps, router } = this.props

    const isToSignIn = router.route === '/sign-in'

    return (
      <Container >
        <style global jsx>{`
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
          }

          body > * {
            width: 100%;
            height: 100%;
          }
          /* custom! */
        `}</style>

        { !isToSignIn && <NavBar /> }

        <Component {...pageProps} />
      </Container>
    )
  }
}

export default ArmageddonApp
