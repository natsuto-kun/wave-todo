import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  width: 120px;
  background-color: #5ee7ff;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

interface Props {
  onAddList: (item: string) => void;
}

export const AppForm = ({ onAddList }: Props) => {
  const [text, setText] = useState("");

  const submitText = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddList(text);
    console.log({ text });
  };

  return (
    <div>
      <form onSubmit={submitText}>
        <div>
          <Input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div>
          <Button>+</Button>
        </div>
      </form>
    </div>
  );
};
