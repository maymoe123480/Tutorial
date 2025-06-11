"use client";
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link';


export default function BlogList() {
  return (
    <div>
      <Box> <Typography> Blog list Page</Typography>
      <Link href="/blog/1" passHref > <Button>go to blog 1</Button></Link>
    <Link href="/blog/2" passHref > <Button>go to blog 2</Button></Link></Box>

    </div>
  );
}
