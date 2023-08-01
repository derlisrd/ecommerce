import AddCartButton from "@/components/button/addcart";

export default async function ProductPage({ params, searchParams }) {
  return (
    <main className="container max-w-5xl mx-auto px-4">
      <div className="my-6">
        <div className="border-b-slate-200 border-b">
          <h2 className="text-lg">Mouse Inalámbrico Logitech M650 Grande</h2>
          <h5 className="text-sm">
            {" "}
            Sea El Primero En Dejar Una Reseña Para Este Artículo |{" "}
            <span className="font-semibold">SKU PC-75394</span>
          </h5>
        </div>
        <div className="flex flex-row my-6 gap-4">
          <div>
            <div>

            </div>
            <div>
                <img className="max-w-full h-auto rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="imagen" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold">218.000</h2>
            <h5>
              Comparte Netflix con una persona que no viva contigo agregando un
              miembro extra. Puedes obtener más información en nuestro Centro de
              ayuda.
            </h5>

            <AddCartButton>AGREGAR LA CARRITO</AddCartButton>
          </div>
        </div>
      </div>
    </main>
  );
}
