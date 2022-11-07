import { useState, useMemo } from 'react'

const scores = [5, 7, 9, 2, 0, 1]

const mapScores = (scores, invoker) => {
  console.log('call mapScores =>', invoker)
  return scores.map((score, index) => {
    const color = score < 5 ? '🔴' : '🟢'

    return (
      <p key={index}> {score} : {color}</p>
    )
  })
}

const UseMemoScore = () => {
  const [render, setRender] = useState(false);

  const scoreContent = mapScores(scores, 'no-memo: UseMemoScore')

  const scoreContentMemo = useMemo(() => {
    return mapScores(scores, 'memo: UseMemoScore')
  }, [])

  return (
    <>

      <div>
        No Memo - {scoreContent}
      </div>
      <div>
        Memo -{scoreContentMemo}
      </div>
      <button onClick={() => setRender(!render)}> New Render</button>
    </>
  )
}

export default UseMemoScore