import styled from "styled-components";

interface Props {
  list: string[];
}

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

const ToDo = styled.div`
  padding-top: auto;
`;

const CheckBox = styled.input`
  padding-left: 40px;
  padding-bottom: 50%;
  position: relative;
  margin-right: 20px;
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 4px;
`;

export const ToDoList = ({ list }: Props) => {
  return (
    <div>
      {list.map((list, index) => {
        return (
          <ToDoContainer>
            <ToDo key={index}>
              {list}
              <CheckBox type="checkbox"></CheckBox>
            </ToDo>
          </ToDoContainer>
        );
      })}
    </div>
  );
};
