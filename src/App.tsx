import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import { AuthContextProvider } from './contexts/AuthContexts'
import { AdiminRoom } from "./pages/AdiminRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/adimin/rooms/:id" component={AdiminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
