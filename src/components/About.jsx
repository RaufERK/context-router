import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts';
import Production from './Production';

const About = () => {
  return (
    <div>
      <h2>REAL ABOUT!!</h2>
      <nav>
        <ul>
          <li>
            <Link to="/about/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/about/production">Production</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about/contacts">
          <Contacts />
        </Route>
        <Route path="/about/production">
          <Production />
        </Route>
      </Switch>
    </div>
  );
};

export default About;
