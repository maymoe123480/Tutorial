import { Button } from '@mui/material'
import Link from 'next/link'
import React, { children } from 'react'

export default function LinkButton({href, children}) {
  return (
    <div>
      <Link href={href} passHref>
      <Button variant="contained">{children}</Button></Link>
    </div>
  );
}
