import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const User = () => {
    const [users,setUsers] =useState([])
    const [runUseEffect,setRunUesEffect] =useState(0)

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/user/show')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[runUseEffect])

  async  function deleteUser(id) {
     const res = await   axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
        try {
            
            setRunUesEffect(prev => prev+1)
        } catch (error) {
            console.log(error)
        }
    }
    const showUser = users.map((user,index) => 
    <tr key={index}>
        <td>{index +1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td style={{ color: 'Tomato'}}>
        <Link to={`${user.id}`} >
        <button >U</button>
        </Link>
         +++
         <button onClick={()=>deleteUser(user.id)}>D</button>
        </td>
    </tr>
    )
  return (
    <div className='User'>
    <table>
  <thead>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    <th>ctrl</th>
    </tr>
  </thead>
  <tbody>
 {showUser}
  </tbody>
</table>
</div>
  )
}
