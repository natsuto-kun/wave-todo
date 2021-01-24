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
  background-color: #004e66;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

const PopCount = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 5px;
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
  background-color: #fcbe32;
  color: white;
  padding: 20px 0;
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
        <PopCount>完了しているタスク:{count}</PopCount>
        <ToDoList list={list} />
      </FormStyle>
      <Footer>
        <Link to="/progress">Wave to Do!!</Link>
      </Footer>
    </AppBase>
  );
}

export default App;
