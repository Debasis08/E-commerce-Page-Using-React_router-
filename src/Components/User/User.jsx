import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='p-5 flex bg-gray-600 text-white justify-center text-2xl'>
      User: {userid}
    </div>
  )
}

export default User
