import React from 'react'
import {
  Button,
  Card,
  Flex,
  Heading,
  Label,
  Select,
  Stack,
  Text,
  TextArea,
  TextInput,
} from '@sanity/ui'
import {
  ALLOWED_AMOUNTS,
  AMOUNT_SLUGS,
  DEFAULT_AMOUNT,
  DOMAIN_NAME,
  IS_LOCAL,
} from '../data/constants'
import {Layout} from '../components/Layout'

const maxWhatLength = 60
const maxReasonLength = 300
const defaultWhat = 'Dette'
const enc = encodeURIComponent

function getUrl({what, amount, reason}) {
  return IS_LOCAL
    ? `/${enc(amount)}/${enc(what)}?reason=${enc(reason)}`
    : `https://${enc(amount)}.${DOMAIN_NAME}/${enc(what)}?reason=${enc(reason)}`
}

function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
  evt.preventDefault()
  const values = new FormData(evt.target as HTMLFormElement)
  const what = (values.get('what') || defaultWhat).slice(0, maxWhatLength)
  const amount = values.get('amount') || ''
  const reason = (values.get('reason') || '').slice(0, maxReasonLength)

  window.location.href = getUrl({what, amount, reason})
}

function HomePage() {
  const [what, setWhat] = React.useState('')
  const handleWhatChange = React.useCallback((evt) => setWhat(evt.target.value), [setWhat])

  const [reason, setReason] = React.useState('')
  const handleReasonChange = React.useCallback((evt) => setReason(evt.target.value), [setReason])

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Stack space={5}>
          <Stack space={3} as="dl">
            <Flex as="header" justify="space-between" align="center">
              <Card flex={0.4}>
                <Heading as="dt">Krøkkete</Heading>
              </Card>
              <Card flex={0.35}>
                <Text as="em" muted>
                  adjektiv
                </Text>
              </Card>
              <Card flex={0.25}>
                <Text muted>/krø`k:ətə/ </Text>
              </Card>
            </Flex>
            <Card>
              <Text as="dd">klossete ; klønete ; upraktisk</Text>
            </Card>
          </Stack>

          <Stack space={3}>
            <Label htmlFor="what">
              Hva er krøkkete? ({what.length}/{maxWhatLength})
            </Label>
            <TextInput
              name="what"
              id="what"
              placeholder={defaultWhat}
              onInput={handleWhatChange}
              maxLength={maxWhatLength}
              value={what}
            />
          </Stack>

          <Stack space={3}>
            <Label htmlFor="amount">Hvor krøkkete er det?</Label>
            <Select name="amount" id="amount" defaultValue={DEFAULT_AMOUNT}>
              {ALLOWED_AMOUNTS.map((amount, i) => {
                const slug = AMOUNT_SLUGS[i]
                return (
                  <option key={slug} value={slug}>
                    {amount}
                  </option>
                )
              })}
            </Select>
          </Stack>

          <Stack space={3}>
            <Label htmlFor="reason">
              Hvorfor er det krøkkete? ({reason.length}/{maxReasonLength})
            </Label>
            <TextArea
              name="reason"
              id="reason"
              placeholder="Fordi..."
              rows={5}
              onInput={handleReasonChange}
              maxLength={maxReasonLength}
              value={reason}
            />
          </Stack>

          <Stack space={3}>
            <Button type="submit" tone="primary" text="Del det med verden" />
          </Stack>
        </Stack>
      </form>
    </Layout>
  )
}

export default HomePage
