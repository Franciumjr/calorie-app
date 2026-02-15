

import Dashboard from './components/dashboard/Dashboard'
import Card from './components/Card'
import Loading from './components/Loading'
import { Suspense } from 'react'
import { Theme , Skeleton } from '@radix-ui/themes'
import Sidebar from "./components/Sidebar";
import AddButton from './components/AddButton'
import Food from "./components/Food"


function App() {


  return (
    <>
      <Theme appearance='dark'>
        
      <div className='flex flex-row '>
        <AddButton></AddButton>
        <Sidebar></Sidebar>
        <Dashboard></Dashboard>
      </div>
      </Theme>
    </>
  )
}

export default App
