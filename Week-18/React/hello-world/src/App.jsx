// import logo from './logo.svg';
import Counter from './components/counter';
import SearchFilter from './components/searchFilter';
import './App.css';


function App() {
  const mt_20 = {
    marginTop: "20px"
  }

  return (
    <>
      <Counter />
      <div style={{ mt_20 }}>
        <SearchFilter />
      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
