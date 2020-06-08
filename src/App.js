import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ColorPage from './ColorPage';
import NewColor from './NewColor';


const App =()=> {
  return (
    <div>
        <Switch>
          <Route path="/colors/new" component={NewColor} />
          <Route path="/colors/:id" render={(props)=><ColorPage {...props}/>} />
          <Route path="/" component= {(props)=> <Home {...props} />} />
        </Switch>
    </div>
  );
}

export default App;
