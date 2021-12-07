import * as React from 'react'
import Image from 'next/image'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'

export default function CompsCardCreateYourBurger() {
  const { t } = useTranslation('menubag')

  return (
    <NextLink href="/createburger" passHref>
      <ButtonBase>
        <Card align="center" sx={{ maxWidth: 345, border: 2, borderColor: '#ffc107' }}>

          <Image
            alt="CreateABurger"
            height="200"
            width="300"
            src="/assets/burgercreate.jpg"
          />
          <CardContent>
            <Typography align="center" gutterBottom variant="h5" component="span">
              {t('createOwnBurger')}
            </Typography>
            <Typography align="center" gutterBottom variant="body2" color="text.secondary">
              {t('createDesc')}
            </Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    </NextLink>
  )
}
