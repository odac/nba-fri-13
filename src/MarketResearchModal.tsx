
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

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

const MarketResearchModal = ({ open, onClose, trend }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Industry News
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {trend.news}
        </Typography>
        <Button sx={{ mt: 2 }}>View Full Report</Button>
      </Box>
    </Modal>
  );
};

export default MarketResearchModal;
