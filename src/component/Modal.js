import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Typography,TextField} from '@mui/material';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function BasicModal(props) {
 const {open, handleClose , handleOpen} = props;

 console.warn(open)
 console.log(handleClose)
 console.warn(handleOpen)
  

  return (
    <>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        popup={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} container >
        <Typography> <Box marginLeft ={47} marginTop={-3.5}>
        
        <Button onClick={handleClose} ><CloseIcon /></Button>
        </Box>
        </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2" m={2} ml={15}>
            Edit Input Field
          </Typography>
          <Typography m={2} ml={12}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            
          </Typography>
          <Typography  ml={15} mt={-4}>
          <Button varient="outlined" sx={{p: 2 , m : 3 , width : 100}} type='submit'>Save</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
