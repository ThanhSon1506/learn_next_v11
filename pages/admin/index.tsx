import { AdminLayout } from '@/features/layout'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NextPageWithLayout } from '@/common'

const AdminPage: NextPageWithLayout = () => {
  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Material UI - Next.js example in TypeScript
      </Typography>
    </Box>
  )
}

AdminPage.Layout = AdminLayout

export default AdminPage
