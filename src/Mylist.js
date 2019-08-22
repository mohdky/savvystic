import React from 'react';
import Alist from './Alist';


const tops = [
  {label:'Topic 1'} ,
  {label:'Topic 2'} ,
  {label:'Topic 3'} ,
  {label:'Topic 4'} ,
  {label:'Topic 5'} ,
  {label:'Topic 6'},
]


const mylist= (props) => (
  <div>
    <div className="album py-5 bg-light">
     <div className="container">
      <div className="row">
  { tops.map(ctrl => (
    <Alist
      label={ctrl.label} />))}
    </div>
  </div>
 </div>
  </div>
    );


export default mylist;
