import * as React from 'react';
import {Link} from 'react-router-dom';
// import { ToDo } from './ToDoItem';

interface State {}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <input />
        <button>追加</button>
       
      </body>
      <footer>
        <Link to="/progress">進捗</Link>
      </footer>
    </div>
  );
}

export default App;
