import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'

export const Topbar = () => {
  return (
    <div className='Topbar'>
        <div className='TContainer'>
            <h1 > Dashboard</h1>
            <Link to='/'  className='btn Dbtn'>Go to Web</Link>
        </div>
    </div>
  )
}
