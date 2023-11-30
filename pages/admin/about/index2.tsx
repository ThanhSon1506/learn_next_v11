import { AdminLayout } from '@/features/layout'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NextPageWithLayout } from '@/common'
import { CounterContainer } from '@/features/counter/Counter'

const About: NextPageWithLayout = () => {
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
      <CounterContainer />
      <Typography variant="h4" component="h1" gutterBottom>
        Material UI - Next.js example in TypeScript
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        About
      </Typography>
    </Box>
  )
}

About.Layout = AdminLayout

export default About
