import { Loading } from '@/components/Loading'
import { Box, Stack, Typography } from '@mui/material'
export const LoadingInitAdmin = () => {
  return (
    <Stack minHeight="100vh">
      <Box component="main" flexGrow={1} sx={{ mt: '10rem', textAlign: 'center' }}>
        <Typography variant="h3">Admin</Typography>
        <Box sx={{ mt: '1rem' }}>
          <Loading />
        </Box>
      </Box>
    </Stack>
  )
}
