import AppAreaChart from '@/components/AppAreaChart'
import AppLineChart from '@/components/AppLineChart'
import AppPieChart from '@/components/AppPieChart'
import Navbar from '@/components/Navbar'
import TodoList from '@/components/TodoList'
import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <div className='bg-primary-foreground rounded-md py-4 pl-4 col-span-3'>
        <h1 className='mb-4 font-bold text-2xl'>Revenue Analytics</h1>
        <AppAreaChart />
      </div>

      <div className='bg-primary-foreground rounded-md py-4 pl-4 '>
        <h2 className='mb-2 font-semibold text-xl'>User Distribution by Browser</h2>
        <AppPieChart />
      </div>

      {/* <div className='bg-primary-foreground rounded-md p-4 flex flex-col items-start justify-center'>
        <h2 className='mb-2 font-semibold text-lg'>Active Users</h2>
        <span className='text-3xl font-bold'>1,245</span>
        <span className='text-xs text-muted-foreground mt-1'>+5% this week</span>
      </div> */}

      <div className='bg-primary-foreground rounded-md p-4 '>
        <h2 className='mb-2 font-semibold text-xl'>Todos</h2>
        <TodoList />        
      </div>

      <div className='bg-primary-foreground rounded-md py-4 pl-4 col-span-3'>
        <h2 className='mb-2 font-semibold text-xl'>Monthly Device Usage Trends</h2>
        <AppLineChart />
      </div>
      {/* <div className='bg-primary-foreground rounded-md p-2'>6</div> */}
    </div>
  )
}

export default Home