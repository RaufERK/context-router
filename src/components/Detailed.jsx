import { useParams } from 'react-router-dom';

import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/CompContext';

const Detailed = () => {
  const { prod } = useContext(DataContext);
  const { prodID } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (prodID && prod && Array.isArray(prod)) {
      setItem(prod.find((el) => el.id === prodID));
    }
  }, [prodID, prod]);

  return (
    <div className="box">
      <h1>Detailed Info</h1>
      {/* <p>{JSON.stringify(prodID)}</p>
      <p>{JSON.stringify(prod)}</p> */}

      {item ? (
        <ul>
          <li>{item.name}</li>
          <li>PRICE : {item.price}</li>
        </ul>
      ) : (
        'no such item'
      )}
    </div>
  );
};

export default Detailed;
