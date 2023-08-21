import { Link, Head } from '@inertiajs/react'
import { Fragment } from "react";


export default function Layout({ children }) {
  return (
    <Fragment>
    <Head>
      <title>
        Munfirm - Agriculture &amp; Organic Food React NextJS Template
      </title>
      {/* Favicon Icon */}
      <link
        rel="shortcut icon"
        href="/images/favicon.png" 
        type="image/x-icon"
      />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </header>
      <article>{children}</article>
    </main>
  </Fragment>
    
  )
}