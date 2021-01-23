import { useState } from "react";
import { CheckBox } from "./components/CheckBox";
import styled from "styled-components";
import { IListItem } from "./contexts/listContext";

const ToDoContainer = styled.div`
  display: flex;
  border: 1px solid aquamarine;
  margin: 12px;
  border-radius: 4px;
  width: 300px;
  background-color: #fafbfd;
  box-shadow: 1px 2px 5px 3px rgba(0, 0, 0, 0.1);
  padding: 4px 2px;
`;

const DeleteButton = styled.button``;

interface Props {
  list: IListItem[];
}

export const ToDoList = ({ list }: Props) => {
  return (
    <div>
      {list.map((item, index) => {
        return (
          <ToDoContainer>
            <CheckBox key={index} index={index} item={item} />
          </ToDoContainer>
        );
      })}
    </div>
  );
};
