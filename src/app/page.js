import HeaderMenu from "@/components/menu/headermenu";
import LastProducts from "@/sections/lastproducts";


export default function Home() {
  return (
    <main className="container max-w-5xl mx-auto px-4">
      <HeaderMenu />
      <LastProducts />
    </main>
  )
}
