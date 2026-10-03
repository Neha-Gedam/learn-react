import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // const [data, setData] = React.useState([])

  // useEffect(() => {
  //     fetch('https://api.github.com/users/Neha-Gedam')
  //     .then((response) => response.json())
  //     .then(data => {
  //       setData(data)})
  // }, [])

  return (
    <div className='justify-center bg-grey-400 text-center py-5 text-black text-xl font-extrabold'>
        <h1>ID : {data.id}</h1>
        <img src={data.avatar_url} width={300} className='justify-center' />
    </div>
  )
}


export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Neha-Gedam')

  return response.json()
}