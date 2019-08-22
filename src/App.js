import React from 'react';
import Layout from './Layout';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './BaseRouter';



function App() {
  return (
  <div className = "App">

  <Router>
    <Layout>
            <BaseRouter/>
    </Layout>
  </Router>

  </div>
  );
}

export default App;
