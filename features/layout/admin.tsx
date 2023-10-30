import { LayoutProps } from '@/common'
import * as React from 'react'
import { Box, Stack } from '@mui/material'

export function AdminLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Box component="main" flexGrow={1}>
        <>AdminLayout</>
        {children}
      </Box>
    </Stack>
  )
}
