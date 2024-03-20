import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseHead from './components/BaseHead.tsx'
import { SITE_URL, SITE_DESCRIPTION, SITE_NAME } from './constants/base.ts'

ReactDOM.createRoot(document.getElementById('base')!).render(
  <React.StrictMode>
    <BaseHead url={SITE_URL} title={SITE_NAME} description={SITE_DESCRIPTION} />
  </React.StrictMode>,
)
