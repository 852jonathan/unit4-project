import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import React, { useEffect } from 'react'
import { appWithTranslation } from 'next-i18next'
import { ToastContainer } from 'react-toastify'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
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
}
export default appWithTranslation(MyApp)
