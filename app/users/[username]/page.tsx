import React from 'react'

const SingleUserPage = ({ params }: { params: { username: string } }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{params.username} here!</h1>
    </div>
  )
}

export default SingleUserPage