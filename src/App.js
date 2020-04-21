import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Header from './components/Header';

const App = () => {
  return (
    <Container fluid>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;