import React, { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function GitHub() {
  const data = useLoaderData()
  // const [data, setData] = useState([]) 
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Shantanu675')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // },[])
    // const {id} = useParams()
  return (
    <>
      <h1 className="bg-gray-600">GitHub Followers : {data.followers}</h1>
      <img className="space-x-11" src={data.avatar_url} alt="Git Picture" width={300} />
    </>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Shantanu675')
  return response.json()
}