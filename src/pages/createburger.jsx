import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import CompsLayout from '@/components/layouts/Layout'
import FormsProductCreateBurger from '@/forms/products/createburger'

import theme from '@/styles/theme'

const ingredientsMapping = {
  'Brioche Top Bun': '/assets/thick-top-bun.png',
  'Squid Ink Top Bun': '/assets/thick-squid-top-bun.png',
  Lettuce: '/assets/lettuce-leaf.png',
  Tomato: '/assets/tomato.png',
  'Back Bacon': '/assets/back-bacon.png',
  'Red Pepper': '/assets/red-pepper.png',
  'Rocket Leaf': '/assets/rocket-leaf.png',
  Mushrooms: '/assets/mushrooms.png',
  'Swiss Cheese': '/assets/swiss-cheese.png',
  'Square Cheese': '/assets/square-cheese.png',
  Pickles: '/assets/pickles.png',
  'Grilled Beef Patty': '/assets/grilled-beef-patty.png',
  'Bottom Bun': '/assets/bottom-bun.png',
  'Squid Ink Bottom Bun': '/assets/squid-bottom-bun.png'
}

export default function PagesCreateABurger() {
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
        <title>MahaBurger - Create A Burger</title>
      </Head>

      <div id="pages-createburger">
        <ThemeProvider theme={theme}>
          <Typography textAlign="center" variant="h4" sx={{ my: 2 }}>Create A Burger</Typography>
          <Box sx={{ flexGrow: 1 }}>
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
                            src={ingredientsMapping[ingredients.top]}
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
                            src={ingredientsMapping[ingredient]}
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
                            src={ingredientsMapping[ingredients.bot]}
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
