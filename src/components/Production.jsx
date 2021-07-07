import { useContext } from 'react';

import { DataContext } from '../context/CompContext';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Detailed from './Detailed';

const Production = () => {
  const { counter, setCounter, prod } = useContext(DataContext);
  const routeMatch = useRouteMatch();
  const { url, path } = routeMatch;
  return (
    <div className="box">
      <div>{JSON.stringify(routeMatch)}</div>
      <h1>Production</h1>
      <h4>{counter}</h4>

      <button onClick={() => setCounter((pre) => pre - 1)}>DEC</button>
      <ul>
        {prod.map((el) => (
          <li>
            <Link to={`${url}/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
      {/* <pre>{JSON.stringify(prod, null, 2)}</pre> */}

      <Switch>
        <Route path={`${path}/:prodID`}>
          <Detailed />
        </Route>
      </Switch>
    </div>
  );
};

export default Production;
