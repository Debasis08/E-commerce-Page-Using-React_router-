// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect (() => {
    //     fetch('https://api.github.com/users/Debasis08')
    //     .then (response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center font-mono m-4 bg-gray-600 text-white text-2xl rounded-3xl'>
      Github Name: {data.name} <br/>
      Github Followers: {data.followers} <br/>
      Github Following: {data.following}
      <img src={data.avatar_url} alt="Git Picture" width={300} className='mx-auto rounded-lg' />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch ('https://api.github.com/users/Debasis08')
    return response.json()
}