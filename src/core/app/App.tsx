import React from "react";
import { Actions } from "../../features/actions/actions";
import { Info } from "../../features/info/info";
import { Keyboard } from "../../features/keyboard/keyboard";

function App() {
  return (
    <div className="container">
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </div>
  );
}

export default App;
