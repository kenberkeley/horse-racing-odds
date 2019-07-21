import React from 'react'
import DocumentTitle from 'react-document-title'
import Index from './pages/index/'

export default function App () {
  // should use router if there are more pages
  return (
    <DocumentTitle title='Horse Racing Odds'>
      <main className='container' style={{ padding: '1.5rem .75rem' }}>
        <Index />
      </main>
    </DocumentTitle>
  )
}
