import React from 'react'
import Index from './pages/index/'

export default function App () {
  // should use router if there are more pages
  return (
    <main className='container' style={{ padding: '1.5rem .75rem' }}>
      <Index />
    </main>
  )
}
