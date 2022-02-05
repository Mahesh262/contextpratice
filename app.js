import React, { createContext, useState } from 'react';
import Acpnt from './Acpnt';
import Bcompnt from './Bcompnt'
export const store = createContext()
const App = () => {
  const [data, setData] = useState(0);

  return <>

    <store.Provider value={[data, setData]}>
      <center>

        <Acpnt />
        <Bcompnt />
        <button onClick={() => setData(data + 1)}>Reset</button>

      </center>
    </store.Provider>


  </>;
};

export default App;
