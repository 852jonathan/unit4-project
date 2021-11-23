import CompsLayoutsNavbar from '@/components/layouts/navbar/Navbar'

export default function CompLayout({ children }) {
  return (
    <div id="comps-layout">
      <CompsLayoutsNavbar />
      {children}
    </div>
  )
}
