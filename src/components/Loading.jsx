import React from 'react'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export default function CompsLoading() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
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
