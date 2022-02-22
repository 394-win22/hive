import { Box, TextField, Button, Divider } from "@mui/material";
import { logInWithEmailAndPassword, signInWithGoogle } from "utilities/firebase";
import GoogleIcon from '@mui/icons-material/Google';

const LogIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    logInWithEmailAndPassword(data.get('email'), data.get('password'));
  };

  return (
    <Box sx={{ mt: 5, width: 300 }} >
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
      >
        <TextField
          variant="filled"
          color="secondary"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="filled"
          color="secondary"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          color='secondary'
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 3 }}
        >
          Sign In
        </Button>
        <Divider>OR</Divider>
        <Button
          color='secondary'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
          onClick={signInWithGoogle}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
      </Box>
    </Box>
  );
}

export default LogIn;