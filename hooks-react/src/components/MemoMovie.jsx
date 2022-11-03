import React from 'react'

const MemoMovie = React.memo(({ title, poster }) => {
  console.log('renderizo Memo Movie')
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} alt={title} />
    </div>
  )
})

export default MemoMovie



// import React from 'react'

// const MemoMovie = ({ title, poster }) => {
//   console.log('renderizo Memo Movie')
//   return (
//     <div>
//       <h3>{title}</h3>
//       <img src={poster} alt={title} />
//     </div>
//   )
// }

// const moviePropsAreEqual = (prevMovie, nextMovie) => {
//   return prevMovie.title === nextMovie.title;
// }

// export default React.memo(MemoMovie, moviePropsAreEqual)
