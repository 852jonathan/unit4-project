import Head from 'next/head'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import CompsLayout from '@/components/layouts/Layout'
import CompsCardCreateYourBurger from '@/components/layouts/menu/card/CreateYourBurger'
import CompsLayoutsMenuGrid from '@/components/layouts/menu/grid/MenuGrid'

export default function PagesMenu() {
  return (
    <CompsLayout>
      <Head>
        <title>MahaBurger - Menu</title>
      </Head>
      <div id="pages-menu">
        <Typography variant="h4" component="div" align="center" sx={{ m: 2 }}>
          MENU
        </Typography>
        <Typography variant="h5" component="div" align="center" sx={{ m: 2 }}>
          Specials
        </Typography>
        <Box display="flex" justifyContent="center">
          <CompsCardCreateYourBurger />
        </Box>
        <Typography variant="h5" component="div" align="center" sx={{ m: 2 }}>
          Burgers
        </Typography>
        <CompsLayoutsMenuGrid />
        <CompsLayoutsMenuGrid />
        <Typography variant="h5" component="div" align="center" sx={{ m: 2 }}>
          Sides
        </Typography>
        <CompsLayoutsMenuGrid />
        <Typography variant="h5" component="div" align="center" sx={{ m: 2 }}>
          Drinks
        </Typography>
        <CompsLayoutsMenuGrid />

      </div>

    </CompsLayout>
  )
}
