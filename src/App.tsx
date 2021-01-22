import * as React from "react";
import { Link } from "react-router-dom";
import { ToDoList } from "./ToDoList";
import styled from "styled-components";
import { useState } from "react";
import { AppForm } from "./AppForm";

const AppBase = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #87f3e523;
`;

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 15%;
  padding-bottom: 16px;
  border-bottom: 1px solid #aaa;
`;
const Footer = styled.footer`
  display: flex;
  align-items: center;
  background-color: rgba(30, 107, 117, 0.5);
  color: white;
  border-radius: 15%;
`;

function App() {
  const [list, setList] = useState<string[]>([]);

  const addList = (item: string): void => {
    setList([...list, item]);
  };

  return (
    <AppBase>
      <FormStyle>
        <AppForm onAddList={addList} />
      </FormStyle>
      <FormStyle>
        <ToDoList list={list} />
      </FormStyle>
      <Footer>
        <Link to="/progress">進捗</Link>
      </Footer>
    </AppBase>
  );
}

export default App;
