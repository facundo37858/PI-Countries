
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Details from './components/Details/Details';

import Form from './components/FormActivity/Form';
import Home from './components/Home/Home';
import Login from './components/Login/Login';



function App() {
  return (
  
    <div className="App">
      
      <Switch>

        <Route exact path='/' component={Login}></Route>
        <Route path='/home' component={Home}></Route>
        <Route exact path='/addActivity' component={Form}/>
        <Route exact path='/details/:id' render={({match})=> <Details match={match}></Details>}></Route>
        
      
      </Switch>
      
    </div>
 
  );
}

export default App;
