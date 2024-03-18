import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='Sidebar'>
    <div className='SContainer'>  
        <Link to='/dashboard/users'>Users</Link>
        <Link to='/dashboard/users'>Users</Link>
        <Link to='/dashboard/users'>Users</Link>
        </div>
    </div>
  )
}
