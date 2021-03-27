import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "pages/Home"
import Movies from "pages/Movies"
import Series from "pages/Series"


function App() {
  return (

    <Router>

      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />

      </Switch>

    </Router>

  );
}

export default App;
