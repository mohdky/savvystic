import React, {Component} from 'react';
import bulbon from './bulbon.gif';
import bulboff from './bulboff.gif';


class IOT extends Component {


  state = { bulb : false}

bulbon(e){

  this.setState({bulb1:true})
}

bulboff(e){

  this.setState({bulb1:false})
}



  render (){


    return (
  <div className = "container-fluid">
  <div className="position-relative overflow-hidden p-2 p-md-2 m-md-2 text-center bg-light">
  <div className="col-md-12 p-lg-5 mx-auto  my-1">
    <h1 className="  display-4 text-black font-weight-normal">Try The Internet of Things </h1>
    </div>
    </div>

    <div className = " container">
    <div className = "row">
    <form className="form-inline col-md-5">
      <div className="form-group mb-2">
        <input type="text" readOnly className="form-control-plaintext font-weight-bold" id="staticEmail2" value="Enter Your IOT URL here "></input>
      </div>
      <div className="form-group mx-lg-12 mr-2 mb-4">
        <label  className="sr-only">URL</label>
        <input type="text" className="form-control" id="text" placeholder="URL"></input>
      </div>
      <button type="submit" className="btn btn-primary ml-2 mb-4">Connect</button>
    </form>
    </div>

    <div className = "jumbotron" >


      {this.state.bulb1? <img src = {bulbon} onClick={this.bulboff.bind(this)}  className ="rounded mx-auto d-block mb-4"  />:
       <img src = {bulboff}  onClick={this.bulbon.bind(this)} className ="rounded mx-auto d-block mb-4" />}
      <p className = "text-center font-weight-bold" > Bulb A</p>


    </div>
    </div>





      </div>




);

}
}

export default IOT;
