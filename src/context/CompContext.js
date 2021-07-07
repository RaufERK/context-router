import { useState, createContext } from 'react';

const prodDataFromBase = [
  { name: 'snowboard', price: 200, id: 'RT2121' },
  { name: 'skates', price: 300, id: 'RT2122' },
  { name: 'sled', price: 400, id: 'RT2123' },
];

export const DataContext = createContext();

const CompContext = ({ children }) => {
  
  const [counter, setCounter] = useState(200);
  const [prod, setProd] = useState(prodDataFromBase);

  return (
    <DataContext.Provider value={{ prod, setProd, counter, setCounter }}>
      {children}
    </DataContext.Provider>
  );
};

export default CompContext;
