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
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-and-conditions">
          <TermsAndConditions />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
