import React from 'react';
import { hello, Greet } from '@knc/ui-components';

function App() {
  hello();
  return (
    <div className="App">
      <header className="App-header">
        there you go
      </header>
      <Greet message="React with Rollup and Babel is cool" />
    </div>
  );
}

export default App;
