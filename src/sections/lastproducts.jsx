
const items = [
    {
        title: 'Guayaba',
        img: 'https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp',
        price: 30000
    },
    {
        title: 'Ropa de marca',
        img: 'https://preview.colorlib.com/theme/essence/img/product-img/product-2.jpg.webp',
        price: 58200
    },
    {
        title: 'Guayaba',
        img: 'https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp',
        price: 30000
    },
    {
        title: 'Guayaba',
        img: 'https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp',
        price: 30000
    },
    {
        title: 'Guayaba',
        img: 'https://preview.colorlib.com/theme/theplaza/img/products/2.jpg.webp',
        price: 6000
    },
    {
        title: 'Guayaba',
        img: 'https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp',
        price: 30000
    },
    {
        title: 'Guayaba',
        img: 'https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp',
        price: 30000
    },
    {
        title: 'Ropa',
        img: 'https://preview.colorlib.com/theme/theplaza/img/products/7.jpg.webp',
        price: 80000
    }
    
]

async function LastProducts() {


  return <section className="my-8">
        <h1 className="text-center font-bold text-2xl py-4">Productos destacados</h1>
        <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-2 grid-col-1">
            {
                items.map((e,i)=>(
                    <div key={i} className="flex flex-col items-center">
                        <div >
                            <img src={e.img} className="object-cover h-60 w-60 " alt="imagen" />
                        </div>
                        <h5>
                            {e.title}
                        </h5>
                        <b>{e.price}</b>
                    </div>
                ))
            }
        </div>
    </section>;
}

export default LastProducts;
