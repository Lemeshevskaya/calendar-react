import './App.css';
import Date from './components/Data';
import CreateEvent from './components/CreateEvent'


function App() {
  return (
    <div className="App container">
      <h1>My calendar</h1>
      <Date></Date>
      <CreateEvent></CreateEvent>
    </div>
    
  );
}

export default App;
