import { useState, useEffect } from 'react'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'

import CompsLayout from '@/components/layouts/Layout'
import CompsCardCreateYourBurger from '@/components/layouts/menu/card/CreateYourBurger'
import CompsLayoutsMenuGrid from '@/components/layouts/menu/grid/MenuGrid'

export default function PagesMenu() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
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
      {showButton && (
        <Button
          onClick={scrollToTop}
          className="back-to-top"
          startIcon={<ArrowCircleUpIcon />}
        >
          Back to Top
        </Button>
      )}
    </CompsLayout>
  )
}
