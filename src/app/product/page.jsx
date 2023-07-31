
const getData = async()=>{

  const res = await fetch({
    url:'https://api.sandapi.com/user_lMcC0o/verfrutas',
    method:'GET'
  })
  
  if(!res){
    return {}
  }

  return res.json()

}

export default async function Product() {

  const datos = await getData()

  return (
      <main className="container max-w-5xl mx-auto px-4">
        {
          JSON.stringify(datos)
        }
      </main>
  );
}
