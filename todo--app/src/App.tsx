import './App.css';
import TaskBox from './components/TasksBox';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className='main'>
        <TaskBox></TaskBox>
      </main>
    </div>
  );
}

export default App;
