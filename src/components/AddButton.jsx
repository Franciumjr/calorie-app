import React from 'react'
import { Button } from '@radix-ui/themes'
const AddButton = () => {
  return (
    <div className='fixed bottom-4 right-4 z-20 shadow-sm'>
      <Button size="4"  color='lime'>+</Button>
    </div>
  )
}

export default AddButton
