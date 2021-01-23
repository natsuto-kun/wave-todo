import * as React from "react";
import { Link } from "react-router-dom";
import { ToDoList } from "./ToDoList";
import styled from "styled-components";
import { useContext } from "react";
import { AppForm } from "./AppForm";
import { countContext } from "./contexts/countContext";
import { IListItem, listContext } from "./contexts/listContext";

const AppBase = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #87f3e523;
`;

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: auto;
  padding-right: auto;
`;

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  background-color: rgba(30, 107, 117, 0.5);
  color: white;
  padding: 30px 0;
  position: absolute;
  bottom: 0;
`;

function App() {
  const { count } = useContext(countContext);
  const { list, setList } = useContext(listContext);
  console.log(count);

  const addList = (item: IListItem): void => {
    setList([...list, item]);
  };

  return (
    <AppBase>
      <FormStyle>
        <AppForm onAddList={addList} />
      </FormStyle>
      <FormStyle>
        <p>{count}</p>
        <ToDoList list={list} />
      </FormStyle>
      <Footer>
        <Link to="/progress">進捗</Link>
      </Footer>
    </AppBase>
  );
}

export default App;
