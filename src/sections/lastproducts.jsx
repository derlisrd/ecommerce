import { APICALLER } from "@/services/api";

async function getData() {
    "use server"
    const res = await APICALLER.get({table:'categorias'})

    return res;
  }


async function LastProducts() {
    
    let res =  await getData();


    return ( <section>
            {
                JSON.stringify(res)
            }        
    </section> );
}

export default LastProducts;