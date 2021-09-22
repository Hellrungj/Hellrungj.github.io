// eslint-disable-next-line
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./about";
import Projects from "./projects";
import "../assets/styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={`/`}>
            <About />
            <Projects />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
