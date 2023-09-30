const ErrorExample = () => {
  let count = 0;

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => {count = count + 1;console.log(count)}}>increase</button>
    </>

  )
};

export default ErrorExample;
