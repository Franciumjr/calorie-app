import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '@radix-ui/themes'

const NotFound = () => {
  return (
    <div className='bg-zinc-800 flex flex-col w-screen h-screen justify-center items-center gap-4'>
      <h1 className="text-4xl font-bold text-white">404 - Page Not Found ❌</h1>
      <p className="text-white">The page you are looking for does not exist.</p>
        <Link to="/"><Button>Go to Homepage</Button></Link>
    </div>
  )
}

export default NotFound
