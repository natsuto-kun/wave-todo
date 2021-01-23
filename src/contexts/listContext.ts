import React from 'react';

export interface IListItem {
    isChecked: boolean,
    value: string
};

export const listContext = React.createContext({
    list: [{isChecked: true, value: ""}],
    setList: (currentList: IListItem[]) => {}
});