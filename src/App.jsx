

import Dashboard from './components/Dashboard'

import Loading from './components/Loading'
import { Suspense } from 'react'
import { Theme } from '@radix-ui/themes'


function App() {


  return (
    <>
      <Theme>
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
      </Theme>
    </>
  )
}

export default App
