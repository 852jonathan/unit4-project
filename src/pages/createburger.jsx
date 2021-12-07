import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import CompsLayout from '@/components/layouts/Layout'
import FormsProductCreateBurger from '@/forms/products/createburger'

import theme from '@/styles/theme'

// const ingredientsMapping = {
//   'Brioche Top Bun': 'thick-top-bun',
//   'Squid Ink Top Bun': 'thick-squid-top-bun',
//   Lettuce: 'lettuce-leaf',
//   Tomato: 'tomato',
//   'Back Bacon': 'back-bacon',
//   'Red Pepper': 'red-pepper',
//   'Rocket Leaf': 'rocket-leaf',
//   Mushrooms: 'mushrooms',
//   'Swiss Cheese': 'swiss-cheese',
//   'Square Cheese': 'square-cheese',
//   Pickles: 'pickles',
//   'Grilled Beef Patty': 'grilled-beef-patty',
//   'Bottom Bun': 'bottom-bun',
//   'Squid Ink Bottom Bun': 'squid-bottom-bun'
// }
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['homepage', 'common', 'storelocator', 'menubag'])
  }
})
export default function PagesCreateABurger() {
  const { t } = useTranslation('menubag')

  const [ingredients, setIngredients] = useState({
    top: '',
    middle: [],
    bot: ''
  })

  const handleImagePosition = () => {
    const containerWidth = document.getElementsByClassName('ingredients-list')[0].offsetWidth
    const ingredientNodes = document.getElementsByClassName('ingredient-wrapper')
    let sumTop = 0
    for (let i = 0; i < ingredientNodes.length; i += 1) {
      const node = ingredientNodes[i]
      node.style.width = `${containerWidth}px`
      node.style.height = `${containerWidth * 0.53}px`
      node.style.position = 'absolute'
      node.style.top = `${sumTop}px`
      sumTop += ((containerWidth * 0.53) / 3.8)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleImagePosition)

    return function cleanup() {
      window.removeEventListener('resize', handleImagePosition)
    }
  }, [])

  return (
    <CompsLayout>
      <Head>
        <title>MAHABURGER - {t('createOwnBurger')}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

      </Head>

      <div id="pages-createburger">
        <ThemeProvider theme={theme}>
          <Typography align="center" variant="h4" sx={{ my: 2 }}>{t('createOwnBurger')}</Typography>
          <Box sx={{ flexGrow: 1, mb: 3 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <Box className="ingredients-list" sx={{ mx: 'auto', width: '40%', position: 'relative' }}>
                  <Box className="topBun">
                    {
                      ingredients.top && (
                        <div className="ingredient-wrapper">
                          <Image
                            onLoadingComplete={handleImagePosition}
                            className="z-index-999"
                            src={`/assets/ingredients/${[ingredients.top]}.png`}
                            alt="top-ingredients"
                            layout="responsive"
                            height={80}
                            width={150}
                          />
                        </div>
                      )
                    }
                  </Box>
                  <Box className="midIngredients">
                    {
                      ingredients.middle.map((ingredient, index) => (
                        <div key={ingredient} className="ingredient-wrapper">
                          <Image
                            onLoadingComplete={handleImagePosition}
                            className={`z-index-${998 - index}`}
                            src={`/assets/ingredients/${[ingredient]}.png`}
                            alt="middle-ingredients"
                            layout="responsive"
                            height={80}
                            width={150}
                          />
                        </div>
                      ))
                    }
                  </Box>
                  <Box className="botBun">
                    {
                      ingredients.bot && (
                        <div className="ingredient-wrapper">
                          <Image
                            onLoadingComplete={handleImagePosition}
                            className="z-index-949"
                            src={`/assets/ingredients/${[ingredients.bot]}.png`}
                            alt="bot-ingredients"
                            layout="responsive"
                            height={80}
                            width={170}
                          />
                        </div>
                      )
                    }
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <FormsProductCreateBurger ingredients={ingredients} setIngredients={setIngredients} />
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>

      </div>
    </CompsLayout>
  )
}
