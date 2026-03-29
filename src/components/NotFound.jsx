import React from 'react'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'

const NotFound = () => {
  return (
    <div className='bg-white flex flex-col w-screen h-screen justify-center items-center gap-4'>
      <h1 className="text-4xl font-bold text-black">404 - Page Not Found ❌</h1>
      <p className="text-black">The page you are looking for does not exist.</p>
      <Link href="/"><Button>Go to Homepage</Button></Link>
    </div>
  )
}

export default NotFound
