function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points * 100) / maxPossiblePoints;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}
        {Math.ceil(percentage)}%
      </p>
      <p className="highscore">Highscore: {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
