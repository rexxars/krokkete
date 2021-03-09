import React from 'react'

export function getCrookedText({amount, what, reason = ''}) {
  const withReason = getReasonText(reason)
  return `${what || 'Dette'} er ${lcFirst(amount)} krøkkete ${withReason}`.trim()
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
