import { Items } from "../../models/Items";

export const getFetch = async ( query: string ) : Promise<Items> => {

    const resp = await fetch( `http://localhost:3000/api/items?q=${query}` );
    return resp.json();

}