import React from 'react'
import Head from 'next/head'
import {Card, ThemeProvider, studioTheme, Flex} from '@sanity/ui'
import {Footer} from './Footer'
import {OpenGraph} from './OpenGraph'

export function Layout({children}) {
  return (
    <ThemeProvider theme={studioTheme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Krøkkete.com</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>

      <OpenGraph />

      <Flex direction="column" justify="space-between" style={{minHeight: '100vh'}}>
        <Card flex={1} padding={4}>
          {children}
        </Card>
        <Card flex={0.1}>
          <Footer />
        </Card>
      </Flex>
    </ThemeProvider>
  )
}
