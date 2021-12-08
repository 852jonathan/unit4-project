import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CompsLayoutsMenuCardMenuItem from '@/components/layouts/menu/card/MenuItem'
import useProducts from '@/_hooks/products'
import CompsLoading from '@/components/Loading'

export default function CompsLayoutsMenuGrid({ category }) {
  const { products, isLoading } = useProducts(category)

  if (isLoading) return <CompsLoading />

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <Grid container spacing={{ md: 2 }} rowSpacing={2} columnSpacing={{ md: 0.5 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {products.map((product) => (
          <Grid sx={{}} display="flex" justifyContent="center" item xs={2} sm={4} md={4} key={product.id}>
            <CompsLayoutsMenuCardMenuItem product={product} isLoading={isLoading} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
