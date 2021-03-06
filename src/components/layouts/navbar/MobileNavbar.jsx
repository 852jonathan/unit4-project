import React, { useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

import LanguageIcon from '@mui/icons-material/Language'
import MenuIcon from '@mui/icons-material/Menu'
import { useTranslation } from 'next-i18next'
import CompsPopoverLogin from '@/components/popover/Login'
import useUser from '@/_hooks/user'

import CompsDrawerBag from '@/components/drawer/Bag'
import CompsLayoutsNavbarProfile from '@/components/layouts/navbar/Profile'

function CompsNavbarMobile() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const { user } = useUser()
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <>
      <Drawer
        id="mobile-navbar"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="left"
      >
        <List>

          <ListItem>
            <ListItemText>
              {t('navigation')}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <NextLink href="/" passHref>
                <Button color="inherit" sx={{ mr: 3, mt: 2 }}>{t('backToHome')}</Button>
              </NextLink>
            </ListItemText>
          </ListItem>
          {
              !user && <ListItem><CompsPopoverLogin /> </ListItem>
            }
          <ListItem>
            <ListItemText>
              <NextLink href="/aboutus" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>{t('aboutUs')}</Button>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <NextLink href="/menu" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>{t('menu')}</Button>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <NextLink href="/storelocator" passHref>
                <Button color="inherit" sx={{ mr: 3 }}>{t('storeLocator')}</Button>
              </NextLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <NextLink
              href={router.pathname}
              locale={router.locale === 'en' ? 'zh' : 'en'}
              passHref
            >
              <Button color="inherit" sx={{ mr: 3 }} startIcon={<LanguageIcon fontSize="large" />}>EN / ???</Button>
            </NextLink>
          </ListItem>

          {
                user && <ListItem><CompsLayoutsNavbarProfile /></ListItem>
              }
        </List>
      </Drawer>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '64px' }}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon sx={{ ml: 2 }} />
        </IconButton>
        <Box id="logopic" sx={{ flexGrow: 1, my: 'auto', p: 0, textAlign: 'center' }}>
          <NextLink href="/" passHref>
            <Image
              className="z-index-999 navlogo"
              src="/assets/logopic.png"
              alt="LOGO"
              height={64}
              width={64}
            />
          </NextLink>
        </Box>

        <CompsDrawerBag />
      </Toolbar>
    </>
  )
}
export default CompsNavbarMobile
