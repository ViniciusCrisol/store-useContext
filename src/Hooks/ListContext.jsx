import React, { createContext, useState, useContext } from 'react';

const ListContext = createContext();

export default function ListProvider({ children }) {
  const [list, setList] = useState([]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
}

export function useList() {
  const context = useContext(ListContext);
  const { list, setList } = context;

  const listSize = list.length;

  return { list, setList, listSize };
}
