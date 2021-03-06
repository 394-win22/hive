import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

import { forgotPassword } from "utilities/firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #f1b844",
  boxShadow: 24,
  p: 4,
};

const ResetPasswordModal = ({ open, handleClose }) => {
  const handleSubmitModal = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    forgotPassword(data.get("email"));
  };

  return (
    <Modal open={open} onClose={handleClose} data-cy="ForgotPasswordModal">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Reset Password
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          onClick={handleClose}
          data-cy="closeResetPasswordModel"
        >
          <CloseIcon />
        </IconButton>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Please enter your account email address below.
        </Typography>
        <Box
          component="form"
          noValidate
          alignItems="center"
          justify="center"
          onSubmit={handleSubmitModal}
        >
          <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              ml: 1,
            }}
            startIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ResetPasswordModal;
