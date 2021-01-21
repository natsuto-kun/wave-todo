import { useState } from 'react';
import { ListItem } from './ListItem';
import App from './App';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`

const Button = styled.button`
  width: 120px;
  background-color: #5ee7ff;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`

export const AppForm = ( onAddList: any ) => {
  const [text, setText] = useState('');

const submitText = (event: any) => {
    event.preventDefault();
    onAddList(text);
}

    return (
        <div>
        <form onSubmit={ submitText }>
        </form>
        <div>
          <Input type="text" value={ text } onChange={(event) => setText(event.target.value)} />
        </div>
        <div>
            <Button>+</Button>
        </div>
        </div>
    )
}