import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <div className='bg-primary-foreground rounded-md p-2 col-span-2'>1</div>
      <div className='bg-primary-foreground rounded-md p-2'>2</div>
      <div className='bg-primary-foreground rounded-md p-2'>3</div>
      <div className='bg-primary-foreground rounded-md p-2'>4</div>
      <div className='bg-primary-foreground rounded-md p-2 col-span-2'>5</div>
      <div className='bg-primary-foreground rounded-md p-2'>6</div>
    </div>
  )
}

export default Home