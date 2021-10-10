import { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Header } from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        {/* <Switch>
            <Route path="/" exact render={() => <Home setData={setData} data={data}/>}/>
            <Route path={"/:code"} component={DetailsPage}/>
        </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
