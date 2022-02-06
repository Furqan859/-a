import React from 'react';
import { Typography,TextField,Box ,Grid, Button} from '@mui/material';

const Add = (props) => {
    const {handleSubmited,handleInput} = props;
    return (
        <>
         <Typography>
        <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}>
        <Box  display="flex" 
        alignItems="center"
        justifyContent="center">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleInput} />
        <Button variant="outlined" sx={{m:2,height:50,width:100,color:"green" ,outlineColor:"green"}} onClick={handleSubmited}>Add Me</Button>
        </Box>
        </Grid>
        </Typography>
        </>
    );
};

export default Add;