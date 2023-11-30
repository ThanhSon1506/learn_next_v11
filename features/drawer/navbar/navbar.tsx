import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Box, Collapse, List, ListItem, ListItemText } from '@mui/material'
import { useRouter } from 'next/router'
import React, { Fragment, memo, useEffect, useMemo, useState } from 'react'
import { BREADCRUMB_LIST } from './navbar.constant'

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
    const router = useRouter()

    const handleCheckPath = (pathname: string) => {
        return router.pathname.includes(pathname)
    }

    return (
        <List>
            {BREADCRUMB_LIST.map((value, index) => {
                return (
                    <Fragment key={value.key}>
                        <ListItemLink
                            primary={value.name}
                            to={value.key}
                            open={handleCheckPath(value.key)}
                            iconCollapse={value.children?.length}
                            onClick={() => {
                                router.push(value.key)
                            }}
                            selected={handleCheckPath(value.key)}
                        />

                        {!!value.children?.length && (
                            <Collapse
                                key={value.key}
                                component="li"
                                in={handleCheckPath(value.key)}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List disablePadding>
                                    {value.children.map((child, index) => (
                                        <ListItemLink
                                            key={index}
                                            primary={child.name}
                                            sx={{ pl: 4 }}
                                            open={router.pathname === child.key}
                                            to={child.key}
                                            onClick={() => {
                                                router.push(child.key)
                                            }}
                                            selected={router.pathname === child.key}
                                        />
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </Fragment>
                )
            })}
        </List>
    )
}

function ListItemLink(props: any) {
    const { to, open, iconCollapse, primary, ...other } = props
    let icon = null
    if (iconCollapse) {
        icon = open ? <ExpandLess /> : <ExpandMore />
    }

    return (
        <li>
            <ListItem button to={to} {...other}>
                <ListItemText primary={primary} />
                {icon}
            </ListItem>
        </li>
    )
}
