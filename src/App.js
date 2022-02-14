import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Todo from "./todos/Todo";
import TodoDetail from "./todos/Detail";
import TodoRegister from "./todos/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/todo/new" component={TodoRegister} />
        <Route path="/todo/:id" component={TodoDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
