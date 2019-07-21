import React from 'react'
import DocumentTitle from 'react-document-title'
import Header from './components/Header'

import Index from './pages/index/'

export default function App () {
  const title = 'Horse Racing Odds'
  return (
    <DocumentTitle title={title}>
      <div>
        <Header title={title} />
        <main className='container' style={{ padding: '1.5rem .75rem' }}>
          {/* should use router if there are more pages */}
          <Index />
        </main>
      </div>
    </DocumentTitle>
  )
}
