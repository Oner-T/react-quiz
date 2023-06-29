function NextButton({ dispatch, answer, text }) {
  if (answer === null) return null;
  return (
    <button className="btn btn-ui" onClick={dispatch}>
      {text}
    </button>
  );
}

export default NextButton;
