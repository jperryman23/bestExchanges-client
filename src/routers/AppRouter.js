import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Header from '../components/Header'
import Home from '../components/Home';
import Huey from '../components/Huey';
import Duey from '../components/Duey';
import Luey from '../components/Luey';


const AppRouter = () => (

<BrowserRouter>
  <div>

    <Header />
    <Switch>

      <Route exact path ='/' component={Home} />
      <Route path ='/Duey' component={Duey} />
      <Route path ='/Luey' component={Luey} />
      <Route path ='/Huey' component={Huey} />


    </Switch>

  </div>

</BrowserRouter>

)

export default AppRouter;
