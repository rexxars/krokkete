export const ALLOWED_AMOUNTS = ['Litt', 'Ganske', 'Veldig', 'Skikkelig', 'Jævla', 'Ekstremt']
export const AMOUNT_SLUGS = ['litt', 'ganske', 'veldig', 'skikkelig', 'jaevla', 'ekstremt']
export const AMOUNT_SO_PREFIXED = [false, false, false, false, true, true]
export const DEFAULT_AMOUNT = 'veldig'
export const DOMAIN_NAME = 'krøkkete.com'
export const IS_LOCAL = process.env.NODE_ENV !== 'production'
export const PRODUCTION_URL = `https://${DOMAIN_NAME}`
export const BASE_URL = IS_LOCAL ? 'http://localhost:3000' : PRODUCTION_URL
export const SANITY_PROJECT_ID = 'b2i05crh'
export const SANITY_DATASET = 'contributions'
export const SANITY_TOKEN = process.env.SANITY_AUTH_TOKEN
