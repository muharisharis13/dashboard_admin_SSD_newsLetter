import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import { Login } from './page/Login/Login';
import { Navbar } from './component/navbar/navbar';
import Store from './config/Context';
import { cookiesGet } from './config/Cookies'
import { decrypt } from './config/Enkripsi/Enkripsi';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          {
            cookiesGet({ key: 'token' }) && decrypt(cookiesGet({ key: 'token' })) ?
              <App />
              : <Redirect to="/login" />
          }
        </Switch>


      </Router>

    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
