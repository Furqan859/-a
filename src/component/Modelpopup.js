import React from 'react';
import { Typography, Button, CardContent, Card } from '@mui/material'
import BasicModal from './Modal';



export function Modelpopup(props) {
    const { array, setArray ,updateArray} = props;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const deleteButton = (index) => {

        const List = [...array];
        List.splice(index, 1);
        setArray(List);
        console.warn(List)
    }
    const	arrayUpdate = (dd) =>{
        props.setUpdateArray(dd)}



    return (



        <Card >
            <CardContent>


                {
                    array.map((a, index) =>
                        <Typography sx={{ fontSize: 14, m: 1 }} color="text.secondary" key={a.index}>

                            <Typography justify="space-between">
                                <Typography justify="center" display="flex" justifyContent='space-evenly '>
                                    {a} {index}
                                    <Button onClick={() => deleteButton(index)} >Delete</Button>
                                    <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose} array={array}  index={index} getupdateArray={arrayUpdate}/>
                                     
                                      


                                </Typography>

                            </Typography>

                        </Typography>
                    )}
                    
            </CardContent>

        </Card>






    
    );
}

