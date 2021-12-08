// import React, { useState, createContext } from 'react'
// import React, { useCallback, useEffect, useState, createContext } from "react";

// import Stack from '@mui/material/Stack'
// import Snackbar from '@mui/material/Snackbar'
// import MuiAlert from '@mui/material/Alert'

// const SnackbarContext = createContext()

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

// const ToastContext = createContext();

// export default ToastContext;

// export function ToastContextProvider({ children }) {
//   const [toasts, setToasts] = useState([]);

//   useEffect(() => {
//     if (toasts.length > 0) {
//       const timer = setTimeout(
//         () => setToasts((toasts) => toasts.slice(1)),
//         6000
//       );
//       return () => clearTimeout(timer);
//     }
//   }, [toasts]);

//   const addToast = useCallback(
//     function (toast) {
//       setToasts((toasts) => [...toasts, toast]);
//     },
//     [setToasts]
//   );

//   return (
//     <ToastContext.Provider value={addToast}>
//       {children}
//       <div className="toasts-wrapper">
//         {toasts.map((toast) => (
//           <div className="toast" key={toast}>
//             {toast}
//           </div>
//         ))}
//       </div>
//     </ToastContext.Provider>
//   );
// }
