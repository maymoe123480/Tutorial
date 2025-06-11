import { Button } from '@mui/material'
import Link from 'next/link'
import React, { Children } from 'react'

export default function LinkButton({href, Children}) {
  return (
    <div>
      <Link href={href} passHref>
      <Button variant="outlined">{Children}</Button></Link>
    </div>
  );
}
