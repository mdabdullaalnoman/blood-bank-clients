import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import PostRequest from "./Components/PostRequest/PostRequest";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path='/postRequest'>
          <PostRequest />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
