import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header'
import { Home } from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className='App font-sans bg-yellow-50'>
        <Header/>
        <Switch>
            <Route path="/" component={Home}/>
            {/* <Route path={"/:cde"} component={DetailsPage}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
