import React from 'react';
import { Head } from '@inertiajs/react'
import Layout from '../Layout';

export default function Home() {
  return (
    <Layout>
      <Head title="Welcome" />
      <img src="/images/favicon.png"/>
      <h1>Welcome</h1>
      <p>Hello Mao Fofana</p>
    </Layout>
  )
}