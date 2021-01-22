import styled from "styled-components";

interface Props {
  list: string[];
}

const ToDo = styled.div`
  border: 1px solid aquamarine;
  margin: 12px;
  border-radius: 4px;
  width: 300px;
  background-color: #fafbfd;
  box-shadow: 1px 2px 5px 3px rgba(0, 0, 0, 0.1);
  padding: 4px 2px;
`;

export const ToDoList = ({ list }: Props) => {
  return (
    <div>
      {list.map((list, index) => {
        return <ToDo key={index}>{list}</ToDo>;
      })}
    </div>
  );
};
