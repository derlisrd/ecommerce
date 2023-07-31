import HeaderMenu from "@/components/menu/headermenu";
import Footer from "@/sections/footer";
import LastProducts from "@/sections/lastproducts";


export default function Home() {
  return (<>
      <HeaderMenu />
    <main className="container max-w-5xl mx-auto px-4">
      <LastProducts />
    </main>
    <Footer />
  </>
  )
}
