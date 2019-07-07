import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'

import NavBar from '../components/NavBar'
import Menu from '../components/Menu'


<<<<<<< HEAD
class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {

    let pageProps = {}
=======
class ArmageddonApp extends App {
  componentDidMount () {
    const authed = sessionStorage.getItem('access_token') || localStorage.getItem('access_token')
    const { route } = this.props.router
>>>>>>> develop

    const isToSignIn = route === '/sing-in'

    if (!authed && !isToSignIn) Router.replace('/sign-in')
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> develop
      </Container>
    )
  }
}

export default ArmageddonApp
