

const APIURL = process.env.API_URL_END_POINT
const XAPITOKEN = process.env.XAPITOKEN

export const APICALLER = {

    get: async({params})=>{
        try {
            let URLFINAL = `${APIURL}/${params}`;
            const res = await fetch(URLFINAL,{ headers:{
                'X-Api-Token':XAPITOKEN,
                'Content-Type': 'application/json',
                'Accept': 'application/json'  
            },  next: { revalidate: 180 } });
            return await res.json();
          } catch (error) {
            return { error:true, response:  false, message: error };
          }
    }

}