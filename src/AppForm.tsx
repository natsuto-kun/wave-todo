import { useState } from "react";
import styled from "styled-components";
import { IListItem } from "./contexts/listContext";

const Base = styled.div`
  width: 300px;
  height: 100%;
  border: 1px solid #00485e;
  margin: 12px;
  border-radius: 4px;
  background-color: #fafbfd;
  box-shadow: 1px 2px 5px 3px rgba(0, 0, 0, 0.3);
  padding: 4px 2px;
`;

const Input = styled.input`
  border-radius: 8px;
  padding: 4px 8px;
  border: 0.5px solid #00485e;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: auto;
  padding-right: auto;
`;

const Button = styled.button`
  border: none;
  height: 20px;
  width: 20px;
  font-size: 20px;
  display: inline-block;
  color: #fff;
  border-radius: 5px;
  background-color: #013e50;
  font-weight: bold;
  box-shadow: 6px 6px #00507a;
  cursor: pointer;
  align-items: center;
  margin: 0 auto;
  margin-left: 3vh;
`;

interface Props {
  onAddList: (item: IListItem) => void;
}

export const AppForm = ({ onAddList }: Props) => {
  const [text, setText] = useState("");

  const submitText = () => {
    if (text === "") return;
    onAddList({ isChecked: false, value: text });
    setText("");
  };

  return (
    <Base>
      <Input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button onClick={submitText}>+</Button>
    </Base>
  );
};
