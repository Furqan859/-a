import React,{useState} from 'react';
import { Typography} from '@mui/material';
import Add from './component/Add';

function App() {
  const [getdata , setGetData] = useState();
  const handleInput =(e)=>{
   setGetData(e.target.value);
  }



  return (
    <>
    <Typography>
    <Add handleSubmited={handleSubmited} handleInput={handleInput}/>
    </Typography>
    </>
  );
}

export default App;
