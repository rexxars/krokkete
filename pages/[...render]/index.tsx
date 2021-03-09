import React from 'react'
import {Button, Heading, Stack} from '@sanity/ui'
import {
  ALLOWED_AMOUNTS,
  AMOUNT_SLUGS,
  BASE_URL,
  DEFAULT_AMOUNT,
  IS_LOCAL,
} from '../../data/constants'
import {Layout} from '../../components/Layout'
import {OpenGraph} from '../../components/OpenGraph'
import {Unenthusiasm} from '../../components/Unethusiasm'
import {CrookedText, getCrookedText, getReasonText} from '../../components/CrookedText'
import {recordView} from '../../data/sanityClient'

function RenderPage({amount, what, reason}) {
  return (
    <Layout>
      <OpenGraph
        title={getCrookedText({amount, what})}
        description={`… ${getReasonText(reason)}`}
      />

      <Stack space={5}>
        <Heading>
          <CrookedText amount={amount} what={what} reason={reason} />
        </Heading>

        <Unenthusiasm />

        <Button as="a" href={BASE_URL} text="Noe annet som er krøkkete?" tone="primary" />
      </Stack>
    </Layout>
  )
}

export async function getServerSideProps({params, req, query}) {
  const segments = params.render.slice()
  const [hostAmount] = (req.headers.host || '').replace('xn--jvla-voa', 'jaevla').split('.', 1)
  const rawAmount = (IS_LOCAL ? segments.shift() : hostAmount).toLowerCase()
  const amount = AMOUNT_SLUGS.includes(rawAmount)
    ? ALLOWED_AMOUNTS[AMOUNT_SLUGS.indexOf(rawAmount)]
    : ALLOWED_AMOUNTS[AMOUNT_SLUGS.indexOf(DEFAULT_AMOUNT)]

  const what = segments.shift()
  const reason = query.reason || null

  if (!what) {
    return {redirect: {destination: BASE_URL, permanent: true}}
  }

  // Silently fail
  recordView({what, amount, reason}).catch(() => null)

  return {
    props: {amount, what, reason},
  }
}

export default RenderPage
