"use client";
import {AppBar, Toolbar,Typography, Button} from '@mui/material';
export default function Navbar(){
    return(
        <AppBar poition="static">
            <Toolbar>
                <Typography variant="h5" sx={{flexGrow:1}}>
                    MyApp
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Dashboard</Button>

            </Toolbar>
        </AppBar>
    );
}