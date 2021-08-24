import { GlobalStyle } from './GlobalStyle';
import { LoginPage } from './pages/LoginPage';
import { Chat } from './pages/Chat';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage}/>
          <Route path="/chat" component={Chat}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
