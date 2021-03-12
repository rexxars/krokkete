import React from 'react'
import {AMOUNT_SLUGS, AMOUNT_SO_PREFIXED, ALLOWED_AMOUNTS} from '../data/constants'

export function getCrookedText({amount, what, reason = ''}) {
  const amountSlug = amount.toLowerCase()
  const index = AMOUNT_SLUGS.indexOf(amountSlug)
  const amountText = lcFirst(ALLOWED_AMOUNTS[index])
  const prefix = AMOUNT_SO_PREFIXED[index] ? `så ` : ''
  const withReason = getReasonText(reason)
  return `${what || 'Dette'} er ${prefix}${amountText} krøkkete ${withReason}`.trim()
}

export function getReasonText(reason = '') {
  const because = lcFirst((reason || '').trim().replace(/^fordi/i, '')).trim()
  const withReason = because ? `fordi ${because}` : ''
  return withReason.trim()
}

export function CrookedText({amount, what, reason}) {
  return <>{getCrookedText({amount, what, reason})}</>
}

function lcFirst(str: string): string {
  return (str[0] || '').toLowerCase() + str.slice(1)
}
