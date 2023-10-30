import { Box, Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { InputField, RadioGroupField, SelectField } from '@/components/form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const FormDemoSchema = yup
  .object({
    name: yup.string().required(),
  })
  .required()

export function FormDemo() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(FormDemoSchema),
  })

  const handleFormDemoSubmit = (values: any) => {
    console.log('values', values)
    // reset()
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleFormDemoSubmit)}>
      <InputField name="name" control={control} />
      <SelectField />
      <RadioGroupField />

      <Button type="submit" variant="contained">
        On Submit
      </Button>
    </Box>
  )
}
