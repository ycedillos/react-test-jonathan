import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SocalMedia from "./pages/SocailMedia";
import Notfound from "./pages/Notfound";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
        <Route exact path="/about">
          <DefaultLayout>
            <About />
          </DefaultLayout>
        </Route>
        <Route exact path="/socail-media">
          <DefaultLayout>
            <SocalMedia />
          </DefaultLayout>
        </Route>
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
