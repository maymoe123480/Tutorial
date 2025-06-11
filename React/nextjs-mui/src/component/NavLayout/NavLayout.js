"use client";
import React from 'react'
import Navbar from './Navbar'
import { Container } from '@mui/material'
import Footer from './Footer'

export default function NavLayout({ children }) {
    return (

        <>
            <Navbar />
            <Container sx={{ mt: 10 }}>{children}</Container>
            <Footer />
        </>

    );
}
