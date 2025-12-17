import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import {Menu, X} from 'lucide-react'
import {Outlet} from 'react-router-dom'
import { dummyUserData } from '../assets/assets.js'
import { useState } from 'react'
import Loading from '../components/Loading.jsx'


const Layout = () => {

  const user= dummyUserData

  // For opening and closing of sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return user ? (
    <div className='w-full flex h-full'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='flex-1 bg-slate-50'>
        <Outlet />                      {/*Loads different pages inside layout*/}                    
      </div>
      {
        sidebarOpen ?
        <X className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'
          onClick={() => setSidebarOpen(false)} />
        :
        <Menu className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'
          onClick={() => setSidebarOpen(true)} />
      }
    </div>
  ) : 
    <Loading />

}

export default Layout 
