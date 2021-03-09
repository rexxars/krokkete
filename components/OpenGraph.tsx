import Head from 'next/head'
import React from 'react'
import {PRODUCTION_URL} from '../data/constants'

export function OpenGraph({
  title = 'Få det ut. Fortell oss hva som er krøkkete.',
  description = 'Ting er krøkkete, as.',
}) {
  return (
    <Head>
      <meta key="description" name="description" content={description} />
      <meta key="og-description" property="og:description" content={description} />
      <meta key="og-title" property="og:title" content={title} />
      <meta key="og-image" property="og:image" content={`${PRODUCTION_URL}/images/krokkete.jpg`} />
      <meta key="og-url" property="og:url" content="https://krøkkete.com/" />
      <meta key="og-site_name" property="og:site_name" content="Krøkkete.com" />
    </Head>
  )
}
