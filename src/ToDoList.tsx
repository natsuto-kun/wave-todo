import { CheckBox } from "./components/CheckBox";
import styled from "styled-components";
import { IListItem } from "./contexts/listContext";

const ToDo = styled.div`
  font-size: 20px;
  color: #00485e;
  vertical-align: middle;
`;

const ToDoContainer = styled.div`
  border: 1px solid #00485e;
  margin: 12px;
  border-radius: 4px;
  width: 300px;
  background-color: #fafbfd;
  box-shadow: 1px 2px 5px 3px rgba(0, 0, 0, 0.1);
  padding: 4px 2px;
`;

interface Props {
  list: IListItem[];
}

export const ToDoList = ({ list }: Props) => {
  return (
    <ToDo>
      {list.map((item, index) => {
        return (
          <ToDoContainer>
            <CheckBox key={index} index={index} item={item} />
          </ToDoContainer>
        );
      })}
    </ToDo>
  );
};
