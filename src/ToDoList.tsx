import * as React from 'react';
import App from './App';
import { ListItem } from './ListItem';

export const ToDoList = ( lists: any ) => {

    return (
        <div>
            {
                ListItem.map((lists, index) => {
                    return <div key={index}>{ lists }</div>
                })
            }
        </div>
    )
}