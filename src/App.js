import React from 'react';
// import data from './data.json';

// import { useRoutes, A } from "hookrouter";
// import routes from "./router";



 
import './App.css';
// import Login from './components/Login';
// import Register from './components/Register'
import Home from './components/Home'
 
function App() {

  // const routeResult = useRoutes(routes);
 
 return ( 
   <div className="App">
   <Home />

     {/* <A href="/home">Home</A> <br />
      <A href="/register">Register</A> <br />
      <A href="/login">Login</A>

      {routeResult} */}

   </div>
 );
}
 
export default App;