import Registration from "./components/login/login";
import Home from "./components/home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./components/notfound/notfound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Registration} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
