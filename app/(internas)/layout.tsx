import InternalNavigation from "@/components/InternalNavigation"
import InternalFooter from "@/components/InternalFooter"
import HideRootNav from "@/components/HideRootNav"

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HideRootNav />
      <InternalNavigation />
      <div id="main-content" className="pt-16 lg:pt-18">
        {children}
      </div>
      <InternalFooter />
    </>
  )
}
