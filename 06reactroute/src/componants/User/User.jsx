import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

 const {userid} = useParams()

  return (
    <div>
      <h1 className='bg-green-400 text-center py-5 text-white text-xl font-extrabold'>Hello User : {userid}</h1>
    </div>
  )
}

export default User
