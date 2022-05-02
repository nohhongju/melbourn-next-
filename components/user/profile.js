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
import {createTheme, ThemeProvider} from '@mui/material/styles';
import styles from '@/styles/Profile.module.css';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export function Profile({loginUser}) {
    
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: 'secondary.main'
                        }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    User Profile Card
                    </Typography>
                    <Box
                        component="form"
                        noValidate="noValidate"
                        sx={{
                            mt: 1
                        }}
                       >
                        <h2
                            style={{
                                textAlign: "center"
                            }}></h2>

                        <div className="styles.card">
                            <img
                                src="https://www.w3schools.com/w3images/team2.jpg"
                                alt="John"
                                style={{
                                    width: "100%"
                                }}/>
                            <h1>
                            {loginUser.name}
                            </h1>
                            <p className="title">CEO & Founder, Example</p>
                            <p>Email: {loginUser.email}</p>
                            <p>Phone: {loginUser.phone}</p>
                            <p>Birth: {loginUser.birth}</p>
                            <p>Address: {loginUser.address}</p>
                            <div
                                style={{
                                    margin: "24px 0"
                                }}>
                                <a href="#">
                                    <i className="styles.fa styles.fa-dribbble"></i>
                                </a>
                                <a href="#">
                                    <i className="styles.fa styles.fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="styles.fa styles.fa-linkedin"></i>
                                </a>
                                <a href="#">
                                    <i className="styles.fa styles.fa-facebook"></i>
                                </a>
                            </div>
                            <p>
                                <button>Contact</button>
                            </p>
                        </div>
                    </Box>
                </Box>
                <Copyright
                    sx={{
                        mt: 8,
                        mb: 4
                    }}/>
            </Container>
        </ThemeProvider>
    );
}