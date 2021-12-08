// import React, { useState, createContext } from 'react'
// import Stack from '@mui/material/Stack'
// import Snackbar from '@mui/material/Snackbar'
// import MuiAlert from '@mui/material/Alert'

// export const SnackbarContext = createContext(toast)

// export default function CompsSnackbar() {
//   const [toast, setToast] = useState({
//     message: '',
//     open: false
//   })

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return
//     }
//     setToast({ open: false })
//   }

//   const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />)

//   return (

//     <SnackbarContext.Provider value={{ toast, setToast }}>
//       <Stack spacing={2} sx={{ width: '100%' }}>
//         <Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose}>
//           <Alert message={toast.message} onClose={handleClose} severity="error" sx={{ width: '100%' }}>{toast.message}</Alert>
//         </Snackbar>
//       </Stack>
//     </SnackbarContext.Provider>
//   )
// }

// // const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />)

// // export default function CompsSnackbarToastError() {
// //   const [open, setOpen] = useState(true)

// //   const handleClose = (event, reason) => {
// //     if (reason === 'clickaway') {
// //       return
// //     }
// //     setOpen(false)
// //   }

// //   return (
// //     <Stack spacing={2} sx={{ width: '100%' }}>
// //       <Snackbar open autoHideDuration={6000} onClose={handleClose}>
// //         <Alert message={message} onClose={handleClose} severity="error" sx={{ width: '100%' }}>{message}</Alert>
// //       </Snackbar>
// //     </Stack>
// //   )
// // }
