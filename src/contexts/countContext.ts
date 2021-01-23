import React from 'react'
export const countContext = React.createContext({
    count: 0,
    setCount: (currentCount: number) => {}
});