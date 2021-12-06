// import * as React from 'react'
// import Box from '@mui/material/Box'
// import ImageList from '@mui/material/ImageList'
// import ImageListItem from '@mui/material/ImageListItem'

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
//     title: 'Bed'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
//     title: 'Books'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
//     title: 'Sink'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
//     title: 'Kitchen'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//     title: 'Blinds'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//     title: 'Chairs'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//     title: 'Laptop'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//     title: 'Doors'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//     title: 'Coffee'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//     title: 'Storage'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//     title: 'Candle'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table'
//   }
// ]

// export default function CompsImageList() {
//   return (
//     <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
//       <ImageList variant="masonry" cols={3} gap={8}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               alt={item.title}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   )
// }
