import { NextPageWithLayout } from '@/common'
import { Loading } from '@/components/Loading'
import { AdminLayout } from '@/features/layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import Cookies from 'cookies'


const LoginPage: NextPageWithLayout = () => {
  const router = useRouter()
  const handleLoginAdmin = () => {
    fetch('/api/login')
      .then((res) => res.json())
      .then((res) => router.push('/admin'))
  }
  return (
    <Box>
      <Typography>Login Page</Typography>
      <Button variant="outlined" onClick={handleLoginAdmin}>
        Login
      </Button>
    </Box>
  )
}
export default LoginPage
