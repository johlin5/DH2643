import { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <button onClick={() => setState(state + 1)}>CLICKME</button>
      {state}
    </>
  );
};

export default App;
