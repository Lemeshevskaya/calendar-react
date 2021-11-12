import './App.css';
import Calendar from './components/Calendar';
import Date from './components/Data';
import CreateEvent from './components/CreateEvent'


function App() {
  return (
    <div className="App">
      <h1>My calendar</h1>
      <Date></Date>
      <CreateEvent></CreateEvent>
    </div>
    
  );
}

export default App;
