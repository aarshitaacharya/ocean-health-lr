import React from 'react';

function ResultCard({ score, status }) {
  const getStatusClass = () => {
    if (status.toLowerCase().includes('unhealthy')) return 'status-unhealthy';
    if (status.toLowerCase().includes('moderate')) return 'status-moderate';
    return 'status-healthy';
  };

  return (
    <div className="result-card nes-container with-title is-centered">
      <p className="page-title">Prediction Result</p>
      <h2 className="score-text">🧪 Health Score: {score}/100</h2>
      <p className={`status-text ${getStatusClass()}`}>{status}</p>
    </div>
  );
}

export default ResultCard;
