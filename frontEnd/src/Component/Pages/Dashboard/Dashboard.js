import React from 'react'
import './dashboard.css'
import { Sidebar } from '../../Sidebar/Sidebar'
import { Topbar } from '../../Topbar/Topbar'
import { User } from '../User/User'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div  className='Dashboard'>
            <Topbar />
        <div className='DContainer'>
            <Sidebar />
            <Outlet />
            {/* <User /> */}
        </div>
    </div>
  )
}
