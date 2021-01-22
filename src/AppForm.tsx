import { useState } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid aquamarine;
  margin: 12px;
  border-radius: 4px;
  background-color: #fafbfd;
  box-shadow: 1px 2px 5px 3px rgba(0, 0, 0, 0.1);
  padding: 4px 2px;
`;

const Input = styled.input`
  border-radius: 8px;
  padding: 4px 8px;
  border: 1px solid #2ce0d7;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: auto;
  padding-right: auto;
`;

const Button = styled.button`
  width: 120px;
  background-color: #5ee7ff;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: auto;
  padding-right: auto;
`;

interface Props {
  onAddList: (item: string) => void;
}

export const AppForm = ({ onAddList }: Props) => {
  const [text, setText] = useState("");

  const submitText = () => {
    onAddList(text);
    console.log({ text });
    setText("");
  };

  return (
    <Base>
      <div>
        <Input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <Button onClick={submitText}>+</Button>
      </div>
    </Base>
  );
};
