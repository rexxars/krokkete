import crypto from 'crypto'
import SanityClient from '@sanity/client'

import {SANITY_DATASET, SANITY_PROJECT_ID, SANITY_TOKEN} from './constants'

const sanityClient = new SanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_TOKEN,
  useCdn: true,
})

export function recordView({what, amount, reason}) {
  if (!SANITY_TOKEN) {
    return Promise.resolve()
  }

  const hash = crypto
    .createHash('sha1')
    .update(what || '')
    .update(amount || '')
    .update(reason || '')
    .digest('hex')

  return sanityClient
    .transaction()
    .createIfNotExists({
      _id: `contrib-${hash}`,
      _type: 'contribution',
      what: what || undefined,
      amount: amount || undefined,
      reason: reason || undefined,
      views: 0,
    })
    .patch(`contrib-${hash}`, (p) => p.inc({views: 1}))
    .commit({visibility: 'async'})
}
