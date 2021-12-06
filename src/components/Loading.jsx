import React from 'react'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import Layout from '@/components/layouts/Layout'

export default function CompsLoading() {
  return (
    <Layout>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Layout>
  )
}

// export default function CompsLoading() {
//   return (
//     <Layout>
//       <div id="comps-loading" className="text-center">
//         ...Loading
//       </div>
//     </Layout>
//   )
// }
