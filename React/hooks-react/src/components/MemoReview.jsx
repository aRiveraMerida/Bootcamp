import React from 'react'

const MemoReview = ({ review, score }) => {
  console.log('renderizo Memo Review')
  return (
    <div>
      <p>{review} || {score}</p>
    </div>
  )
}

export default MemoReview