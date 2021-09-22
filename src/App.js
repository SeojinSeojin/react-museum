import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Home} />
      <Route path="/:id" component={Detail} />
    </div>
  );
}

export default App;
