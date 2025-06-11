"use client";
import { Box, Typography } from '@mui/material'
import { useParams } from 'next/navigation';
import React from 'react'

// import {useParams} from 'next/navigation';
//dynamic route page
//param id

export default function BlogDetail() {
    const params=useParams();
    console.log('Blog Id:', params.id)
    const blogID=params.id;
  return (
    <div>
      <Box> <Typography> Blog : {blogID}</Typography></Box>
    </div>
  );
}
