import React from 'react'
import DocumentTitle from 'react-document-title'
import Index from './pages/index/'

export default function App () {
  const title = 'Horse Racing Odds'
  return (
    <DocumentTitle title={title}>
      <div>
        <header className='hero is-info is-small'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title has-text-centered'>
                { title }
              </h1>
            </div>
          </div>
        </header>
        <main className='container' style={{ padding: '1.5rem .75rem' }}>
          {/* should use router if there are more pages */}
          <Index />
        </main>
      </div>
    </DocumentTitle>
  )
}
