import Login from "./components/Login/index";
import Home from "./components/Home/index";
import NotFound from "./components/NotFound/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function RouterComponent() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default RouterComponent;
