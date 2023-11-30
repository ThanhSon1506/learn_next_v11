'use client'
import { useRef } from 'react'
import { useAppSelector, useAppDispatch, useAppStore } from '@/stores'
import { increment, CounterState, initialState } from './counterSlice'
import { Button, Typography } from '@mui/material'

export function CounterContainer(props: any) {
  // Initialize the store with the product information
  const store = useAppStore()
  const initialized = useRef(false)
  if (!initialized.current) {
    initialized.current = true
  }
  const value = useAppSelector((state) => state.counter.value || initialState.value)
  const dispatch = useAppDispatch()

  // console.log(store.dispatch())
  //   return <input value={name} onChange={(e) => dispatch(increment(Number(e.target.value)))} />

  return (
    <>
      <Typography variant="body1">value: {value}</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(increment())
        }}
      >
        OnClick
      </Button>
    </>
  )
}
