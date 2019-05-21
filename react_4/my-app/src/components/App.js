import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Header from './Header/Header';

const AsyncHome = lazy(() => import('./Home/Home'));
const AsyncAbout = lazy(() => import('./About/About'));

const Loader = () => <div>load...</div>;
const App = () => (
  <Router>
    <Suspense fallback={Loader}>
      <Header />
      <Route exact path="/" component={AsyncHome} />
      <Route path="/about" component={AsyncAbout} />
      <Route
        path="/about/:id"
        render={props => (
          <div>
            {props.match.params.id}
            <button onClick={() => props.history.push('/')}>home</button>
            <button onCLick={() => props.history.goBack()}>back</button>
          </div>
        )}
      />
    </Suspense>
  </Router>
);

export default App;
