import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Add from './component/Add';
import { Modelpopup } from './component/Modelpopup';


function App() {

  const [getdata, setGetData] = useState();
  const [array, setArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!getdata) {
      alert("Task to be added should not be empty!")
    } else {
      const data = getdata  

      setArray((a) => [data, ...a]);

      setGetData("")

    }


  }

  const updateArray=(aa)=>{
  	setArray(aa)
	}

  


  

  return (
    <>

      <Typography>
        <Add handleSubmit={handleSubmit} getdata={getdata} array={array} setGetData={setGetData} />
        <Modelpopup setGetData={setGetData} setArray={setArray} array={array} setUpdateArray={updateArray}/>


      </Typography>

    </>
  );
}

export default App;
