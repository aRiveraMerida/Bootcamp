import { useState } from "react";

import React from 'react'
import MemoMovie from "./MemoMovie";
import MemoReview from "./MemoReview";

const MemoPage = ({ title, poster, review, initialScore }) => {
  const [score, setScore] = useState(initialScore);
  return (
    <div>
      <MemoMovie title={title} poster={poster} />
      <input type="number" value={score} placeholder="add score" onChange={(e) => setScore(e.target.valueAsNumber)} />
      <MemoReview review={review} score={score} />
    </div>
  )
}

export default MemoPage