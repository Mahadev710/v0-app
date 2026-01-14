import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Button>Test</Button>
        <UserButton/>
    </div>
  )
}

export default Home