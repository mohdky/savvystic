import React from 'react';
import {Route} from 'react-router-dom';
import Siteheader from './Siteheader';
import Mylist from './Mylist';
import Login from './Login';
import DragTest from  './DragTest';
import IOT from  './IOT';
import Catalog from './Catalog';
import BLK from './BLK';









const baserouter = () => (

  <div>
        <Route exact path = '/' component = {Siteheader} />
        <Route exact path = '/Categories' component = {Mylist} />
        <Route exact path = '/Login' component = {Login} />
        <Route exact path = '/Drag' component = {DragTest} />
        <Route exact path = '/IOT' component = {IOT} />
        <Route exact path = '/Catalog' component = {Catalog} />
        <Route exact path = '/BLK' component = {BLK} />




  </div>


);

export default baserouter
