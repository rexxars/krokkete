import React from 'react'

export function Unenthusiasm() {
  return (
    <picture style={{textAlign: 'center'}}>
      <source type="image/avif" srcSet="/images/krokkete.avif" />
      <source type="image/webp" srcSet="/images/krokkete.webp" />
      <img src="images/krokkete.jpg" alt="Larry David er krøkkete" style={{maxWidth: '100%'}} />
    </picture>
  )
}
