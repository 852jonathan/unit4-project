import Head from 'next/head'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'

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

        <Divider sx={{ m: 2, fontSize: '2rem' }}>
          <Chip label="SPECIALS" color="warning" />
          {/* SPECIALS */}
        </Divider>
        {/* <Typography variant="h5" component="div" align="center" sx={{ m: 2 }}>
          Specials
        </Typography> */}
        <Box display="flex" justifyContent="center">

          <CompsCardCreateYourBurger />
        </Box>

        <Divider sx={{ m: 2 }}>
          <Chip label="BURGERS" color="warning" />
        </Divider>
        {/* <Typography variant="h5" component="div" align="center" sx={{ m: 2 }}>
          BURGERS
        </Typography> */}
        <CompsLayoutsMenuGrid category="burgers" />

        <Divider sx={{ m: 2 }}>
          <Chip label="SIDES" color="warning" />
        </Divider>
        {/* <Typography variant="h5" component="div" align="center" sx={{ m: 2 }}>
          SIDES
        </Typography> */}
        <CompsLayoutsMenuGrid category="sides" />

        <Divider sx={{ m: 2 }}>
          <Chip label="DRINKS" color="warning" />
        </Divider>
        {/* <Typography variant="h5" component="div" align="center" sx={{ m: 2 }}>
          DRINKS
        </Typography> */}
        <CompsLayoutsMenuGrid category="drinks" />
      </div>
    </CompsLayout>
  )
}
