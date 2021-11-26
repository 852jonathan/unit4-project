import CompsLayoutsNavbar from '@/components/layouts/navbar/Navbar'
import CompsFooter from '@/components/layouts/footer/Footer'

export default function CompsLayout({ children }) {
  return (
    <div id="comps-layout">
      <CompsLayoutsNavbar />
      {children}
      <CompsFooter />
    </div>
  )
}
