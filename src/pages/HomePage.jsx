import React from 'react'
import SideBar from "../components/SideBar"
import RightSideBar from "../components/RightSideBar"
import ChartContainor from "../components/ChartContainor"
import { useContext } from 'react'
import { ChartContext } from '../../context/ChartContext'
const HomePage = () => {
  const {selectedUser}=useContext(ChartContext)
  return (
    <div className='border-2 w-full h-[100dvh] sm:px-[15%] sm:py-[5%]'>
      <div className={` border-1 border-gray-300 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
        <SideBar/>
        <ChartContainor />
        {selectedUser && <RightSideBar />}
      </div>
    </div>
  )
}

export default HomePage
