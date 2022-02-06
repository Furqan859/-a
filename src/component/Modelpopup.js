import React from 'react';
import { Typography, Button,  CardContent, Card } from '@mui/material'
import BasicModal from './Modal';



export function Modelpopup(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { array, setArray} = props;

    const deleteButton = (index) => {

        const List = [...array];
        List.splice(index, 1);
        setArray(List);
        console.warn(List)
    }
    
   
    
    return (<>



        <Card >
            <CardContent>
            
                {array.map((a, index) =>
                    <Typography sx={{ fontSize: 14, m: 1 }} color="text.secondary" key={index}>

                        <Typography justify="space-between">
                            <Typography justify="center" display="flex" justifyContent='space-evenly '>
                            {a.getdata} 
                        <Button onClick={() => deleteButton(index)} >Delete</Button>
                            


                        <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose}/>
                        
                        
                        
                        </Typography>
                       
                        </Typography>

                    </Typography>
                    )}
      </CardContent>

        </Card>
    





    </>
    );
}

