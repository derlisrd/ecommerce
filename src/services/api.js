

const XAPITOKEN = process.env.XAPITOKEN


const APIURL = process.env.API_URL_END_POINT

export const APICALLER = {

    get: async({table})=>{
        try {
            let URLFINAL = `${APIURL}/${table}`;
            const res = await fetch(URLFINAL,{ next: { revalidate: 180 } });
            return await res.json();
          } catch (error) {
            return { error:true, response:  false, message: error };
          }
    }

}