import ImgHolder from "@/components/PlaceHolder/imgholder";
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
        <div className="flex flex-col md:flex-row my-6 gap-4 w-full">
          <div className="flex gap-4 flex-col-reverse flex-g">
            <div className="flex flex-row gap-2 flex-wrap ">
              <ImgHolder />
              <ImgHolder />
              <ImgHolder />
            </div>
            <div>
                <img className="max-w-full h-auto rounded-md duration-100 ease-out" src="https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/9/1/910-006_-_1.jpg" alt="imagen" />
            </div>
          </div>

          <div>
            <h2 className="font-semibold">218.000</h2>
            <h5>
              Comparte Netflix con una persona que no viva contigo agregando un
              miembro extra. Puedes obtener más información en nuestro Centro de
              ayuda.
            </h5>

            <AddCartButton>AGREGAR AL CARRITO</AddCartButton>
          </div>
        </div>
      </div>
    </main>
  );
}
