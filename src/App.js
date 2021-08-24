import { GlobalStyle } from './GlobalStyle';
import { LoginPage } from './pages/LoginPage';
import { Chat } from './pages/Chat';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import { UserContext } from './hooks/UserContext';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState('');

  return (  
    <>
      <GlobalStyle/>
      <Router>
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <Route path="/" exact component={LoginPage}/>
            <Route path="/chat" component={Chat}/>
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
