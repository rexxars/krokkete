export const ALLOWED_AMOUNTS = ['Litt', 'Veldig', 'Skikkelig', 'Jævla', 'Ekstremt']
export const AMOUNT_SLUGS = ['litt', 'veldig', 'skikkelig', 'jaevla', 'ekstremt']
export const AMOUNT_SO_PREFIXED = [false, false, false, true, true]
export const DEFAULT_AMOUNT = 'veldig'
export const DOMAIN_NAME = 'krøkkete.com'
export const IS_LOCAL = process.env.NODE_ENV !== 'production'
export const PRODUCTION_URL = `https://${DOMAIN_NAME}`
export const BASE_URL = IS_LOCAL ? 'http://localhost:3000' : PRODUCTION_URL
