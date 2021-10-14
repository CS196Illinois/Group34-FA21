import { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Header } from './components/Header/Header'
import { Profile } from './components/Profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Switch>
            {/* <Route path="/" exact render={() => <Home setData={setData} data={data}/>}/> */}
            <Route path={"/profile"} component={Profile}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
