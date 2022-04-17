


function App(props) {
  const subject = props.subject;
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Hello, {subject}!
      </header>
    </div>
  );
}

export default App;
