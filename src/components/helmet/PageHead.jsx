import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function PageHead ({ title, favicon }) {
  useEffect(() => {
    const faviconElement = document.getElementById('favicon')
    if (faviconElement) {
      faviconElement.href = favicon
    }
  }, [favicon])

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  )
}
