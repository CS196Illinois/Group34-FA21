import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
            <Route path="/" exact render={() => 'Hello World!'}/>
            <Route path="/about" exact render={() => 'My name is Kevin Zhang and I am a Stats + CS Major. My interests include investing, watching anime, and playing games.'}/>
            <Route path="/yo" exact render={() => 'Yo, I am an endpoint on a flask server.'}/>
            <Route path="/bye" exact render={() => 'See you later!'}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
