import './App.css';
import { PrivacyPolicy, TermsAndConditions, SelectRoute } from './components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SelectRoute />
        </Route>
        <Route path="/Privacy_Policy_Statement">
          <PrivacyPolicy />
        </Route>
        <Route path="/Terms_And_Conditions">
          <TermsAndConditions />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
