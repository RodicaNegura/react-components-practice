import React from'react';
import { ListItem }  from "../first-component/first-component.component"
import { SecondComponent } from '../second-component';

const App = () => {
  return (
    <div className="App">
      <h1>React Components</h1>
      <ListItem/>
      <SecondComponent/>
    </div>
  );
}

export { App };
