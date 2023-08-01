import Link from "next/link";

const getData = async()=>{
    let res = await fetch('https://api.sandapi.com/user_lMcC0o/categories');
    if(!res){
        return []
    }
    return res.json()
}

async function LastProducts() {
    const items = await getData()


  return (
    <section className="my-8">
      <h1 className="text-center font-bold text-2xl py-4">
        Productos destacados
      </h1>
      <div className="grid grid-col-2 md:grid-cols-4 md:gap-4 sm:grid-col-2 my-4">
        {items.map((e, i) => (
          <Link href={`/product/${e.sand_id}`} key={i}>
            <div className="flex flex-col items-center">
              <div className="shadow-md shadow-slate-400 rounded-md">
                <img
                  src={e.image}
                  className="object-cover rounded-md "
                  alt="imagen"
                  loading="lazy"
                />
              </div>
              <h5>{e.name}</h5>
              <b>{e.price}</b>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LastProducts;
