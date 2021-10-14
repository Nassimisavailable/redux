import './App.css';
import { Head } from './component/Head';
import { Todolist } from './component/Todolist';


function App() {

  return (
    <div className="App">
      <Head/>
      <Todolist/>
    </div>
  );
}

export default App;