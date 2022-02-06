import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Add from './component/Add';
import {Modelpopup} from './component/Modelpopup';
import BasicModal from './component/Modal'
function App() {

  const [getdata, setGetData] = useState();
  const [array, setArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(getdata)
    const data = { getdata }
    setArray((a) => [data, ...a]);

    setGetData("")
    console.warn(array)
  }


  return (
    <>
    
      <Typography>
        <Add handleSubmit={handleSubmit} getdata={getdata} array={array} setGetData={setGetData} />
          <Modelpopup getdata={getdata} setArray={setArray} array={array} />
      </Typography>
      
    </>
  );
}

export default App;
