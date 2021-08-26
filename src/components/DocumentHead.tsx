import Head from 'next/head'
import React from 'react'

export type DocumentHeadProps = { pageTitle: string }

export const DocumentHead = (props: DocumentHeadProps): JSX.Element => (
  <Head>
    <title>{props.pageTitle}</title>
    <link rel='icon' href='/favicon.ico' />
    <link
      href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
      rel='stylesheet'
    />
  </Head>
)
