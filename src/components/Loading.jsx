import React from 'react'

import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

import Layout from '@/components/layouts/Layout'


export default function CompsLoading() {
  return (
    <Layout>
      <Stack id="comps-loading" sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="success" />
      </Stack>
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
