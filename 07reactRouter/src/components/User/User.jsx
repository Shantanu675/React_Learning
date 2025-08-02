import React from "react"
import { useParams } from "react-router-dom"

function User() {
    const {id} = useParams()
  return (
    <>
      <h1 className="bg-lime-300">User : {id}</h1>
    </>
  )
}

export default User