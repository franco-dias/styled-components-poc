import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStyle from './style';
import Home from './containers/Home';
import Extending from './containers/Extending';
import Hierarchy from './containers/Hierarchy';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/extending" component={Extending} />
          <Route path="/hierarchy" component={Hierarchy} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
