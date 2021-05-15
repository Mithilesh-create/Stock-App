import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Topstocks from './components/Topstocks';
import TopLost from './components/TopLost';
import TopActive from './components/TopActive';
function App() {
  return (
    <>
      <BrowserRouter>
        <switch>
          <Route exact path="/"  component={Topstocks} />
          <Route exact path="/toplost" component={TopLost} />
          <Route exact path="/topactive" component={TopActive} />
        </switch>
      </BrowserRouter>
    </>
  );
}

export default App;
