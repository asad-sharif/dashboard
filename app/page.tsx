import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-6 gap-4'>
      <div className='bg-primary-foreground rounded-md p-2 col-span-3'>1</div>
      <div className='bg-primary-foreground rounded-md p-2'>2</div>
      <div className='bg-primary-foreground rounded-md p-2'>3</div>
      <div className='bg-primary-foreground rounded-md p-2'>4</div>
    </div>
  )
}

export default Home