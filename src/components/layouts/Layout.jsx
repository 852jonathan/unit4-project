import CompsLayoutsNavbar from '@/components/layouts/navbar/Navbar'
import CompsFooter from '@/components/layouts/footer/Footer'

import { BagProvider } from '@/_hooks/useBag'

export default function CompsLayout({ children }) {
  return (

    <BagProvider>
      <div id="comps-layout">
        <CompsLayoutsNavbar />
        {children}
        <CompsFooter />
      </div>
    </BagProvider>

  )
}
