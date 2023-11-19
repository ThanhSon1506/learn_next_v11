import { LayoutProps } from '@/common'
import React, { Fragment, ReactElement, useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { LoadingInitAdmin } from '@/components/LoadingInitAdmin'
import { useRouter } from 'next/router'
import axios from 'axios'

export function AdminLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('mounting')
    return () => console.log('unmounting')
  }, [])
  return (
    <AuthLogin>
      <Stack minHeight="100vh">
        <Box component="main" flexGrow={1}>
          <>AdminLayout</>

          <Stack direction="column">
            <Link href="/admin">Home</Link>
            <Link href="/admin/about">About</Link>
          </Stack>

          {children}
        </Box>
      </Stack>
    </AuthLogin>
  )
}

const AuthLogin = ({ children }: { children: ReactElement }) => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    axios({
      url: '/api/lifecycle',
    })
      .then(async (res) => {
        if (res?.status === 200) {
          setIsLoading(false)
          return await router.push('/admin')
        }
        throw Error('Lifecycle not active')
      })
      .catch(async (error) => await router.push('/login'))
  }, [])
  return <Fragment>{isLoading ? <LoadingInitAdmin /> : children}</Fragment>
}
