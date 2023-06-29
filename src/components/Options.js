function Options({ question, dispatch, answer }) {
  return (
    <>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${
            answer || answer === 0
              ? index === answer
                ? "answer"
                : index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={answer !== null}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
              status: "active",
            })
          }
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default Options;
