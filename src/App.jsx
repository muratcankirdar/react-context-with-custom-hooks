import React from 'react';
import Child from './Child';
import { UserContextProvider } from './providers/UserContext.jsx';

const App = () => {
  return (
    <UserContextProvider>
      <Child />
    </UserContextProvider>
  )
}

export default App;
