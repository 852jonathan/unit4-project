import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import React from 'react'
import { appWithTranslation } from 'next-i18next'
import { ToastContainer } from 'react-toastify'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
)
export default appWithTranslation(MyApp)
