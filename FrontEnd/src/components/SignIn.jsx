import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route,useNavigate} from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
 const navigate = useNavigate ();

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/SignIn/SignUser/sign";
    const data = new FormData(event.currentTarget);
  axios.post(url, {
    Email:data.get('email'),
    Password: data.get('password'),
  })
  .then(function (response) {
    console.log(response);
    navigate("/Home")
    
  })
  .catch(function (error) {
    console.log(error);
  });
  };


  return (
    <ThemeProvider theme={theme}>
         <Grid container component="main" 
         sx={{ height: '100vh',
        //   backgroundImage: 'url(https://images.pexels.com/photos/2847646/pexels-photo-2847646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize:'cover',
        //   backgroundPosition: 'center',
          
          }}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            backgroundColor:'white',
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 1,
            p: 4,
            boxShadow: 4,
            borderColor: 'text.primary' 
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
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
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
          
              <Grid item>
               <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
               </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
      </Grid>
    </ThemeProvider>

  );
}