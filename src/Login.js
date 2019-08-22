import React from 'react';

const login= (props) =>
(
<div className="container">
    <form className="form-signin" style = {{
    width: '100%',
    maxWidth: '330px',
    padding: '15px',
    margin: 'auto'
}}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
              <div class="checkbox mb-3">

              </div>
              <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
            </form>
  </div>



);

export default login;
