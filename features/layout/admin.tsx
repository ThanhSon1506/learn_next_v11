import { LayoutProps } from '@/common'
import React, { Fragment, ReactElement, useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { LoadingInitAdmin } from '@/components/LoadingInitAdmin'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ResponsiveDrawer, BREADCRUMB_LIST, IBreadcrumbList, IBreadcrumb } from '@/features/drawer'

export function AdminLayout({ children }: LayoutProps) {
    useEffect(() => {
        console.log('mounting')
        return () => console.log('unmounting')
    }, [])
    return (
        <AuthLogin>
            <Stack minHeight="100vh">
                <Box component="main" flexGrow={1}>
                    <ResponsiveDrawer>{children}</ResponsiveDrawer>
                </Box>
            </Stack>
        </AuthLogin>
    )
}

const AuthLogin = ({ children }: { children: ReactElement }) => {
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    const handleNavbarActive = (breadcrumbList: IBreadcrumbList | IBreadcrumb): boolean => {
        if (Array.isArray(breadcrumbList)) {
            for (const br of breadcrumbList) {
                if (br.children) {
                    let isCheckChildren = handleNavbarActive(br.children)
                    if (isCheckChildren) return true
                }
                let isCheckParent = handleNavbarActive(br)
                if (isCheckParent) return true
            }
        }
        return router.asPath.includes((breadcrumbList as IBreadcrumb).key)
    }

    useEffect(() => {
        axios({
            url: '/api/lifecycle',
        })
            .then(async (res) => {
                if (res?.status === 200) {
                    setIsLoading(false)

                    let navbarActive = handleNavbarActive(BREADCRUMB_LIST)

                    console.log('navbarActive', navbarActive)
                    if (!navbarActive) return await router.push('/admin/dashboard')
                    return
                }
                throw Error('Lifecycle not active')
            })
            .catch(async (error) => await router.push('/login'))
    }, [])
    return <Fragment>{isLoading ? <LoadingInitAdmin /> : children}</Fragment>
}
