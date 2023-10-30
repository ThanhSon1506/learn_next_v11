import { TextField, TextFieldProps } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

export type InputFieldProps = TextFieldProps & {
  control: Control<any>
  name: string
}

export function InputField({ name, control, type, ...rest }: InputFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        return (
          <TextField
            type={'text'}
            value={value}
            onChange={(event) => {
              let filter = event.target.value.replace(/ +/g, ' ')
              event.target.value = filter
              onChange(event)
            }}
            onBlur={(event) => {
              let filter = event.target.value.trim()
              event.target.value = filter
              onChange(event)
            }}
            size="small"
            fullWidth
            {...rest}
            error={!!error}
            helperText={error?.message}
            sx={{
              '& .Mui-error': {
                margin: 0,
                padding: 0,
              },
            }}
          />
        )
      }}
    />
  )
}
