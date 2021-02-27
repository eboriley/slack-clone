import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';



function App() {
  return (
    <div className="App">
      <h1>We're building a slack clone 🧑🏿‍🚀</h1>
      <Header/>
      <div className="app__body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
