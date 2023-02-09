import React from "react";
import { Actions } from "../../features/actions/actions";
import { Info } from "../../features/info/info";
import { Key } from "../../features/key/key";
import { Keyboard } from "../../features/keyboard/keyboard";

function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}

export default App;
