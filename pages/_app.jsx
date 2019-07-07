import React from 'react'
import App, { Container } from 'next/app'

import NavBar from '../components/NavBar'
import Menu from '../components/Menu'


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
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

export default MyApp
