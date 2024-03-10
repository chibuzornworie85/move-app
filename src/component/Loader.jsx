

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./Loader.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "fit-content",
  p: 4,
};

export default function Loader() {


  return (
    <div>
   
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </Box>
      </Modal>
    </div>
  );
}