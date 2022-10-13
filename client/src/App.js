function App() {

  const testAction = async () => {
    const response = await fetch('https://cristo-page.herokuapp.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        test: 'abc'
      })
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Cristo Redentor</h1>
      <button onClick={() => {testAction()}}>TEST</button>
    </div>
  );
}

export default App;
