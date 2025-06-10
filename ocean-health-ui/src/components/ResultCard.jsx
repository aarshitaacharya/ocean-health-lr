import React from 'react'

function ResultCard({score, status}) {
  return (
    <div>
        <p>Result:
            <h2>Score: {score} </h2>
            <p>Status: {status} </p>
        </p>
    </div>
  )
}

export default ResultCard