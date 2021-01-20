import * as React from 'react';
import {Link} from 'react-router-dom';
//import { ToDoListItem } from './ToDoItem';
import styled from "styled-components";

const AppBase = styled.div`
  display: flex;
  align-items: center;
`;

function App() {

  return (
    <AppBase>
      <form 
        className="App-form"
        onSubmit={e => {
          e.preventDefault();
        }}
        >
        <div>
        <input 
          id="title"
          placeholder="title"
        />
        <textarea
            id="description"
            placeholder="description"
        />
        </div>
        <div>
          <button type="submit">
            追加
          </button>
        </div>
      </form>
      <div>
        
      </div>
      <footer>
        <Link to="/progress">進捗</Link>
      </footer>
    </AppBase>
  );
}

export default App;
