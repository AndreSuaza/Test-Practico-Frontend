import { ItemDetail } from "../../models/Items";

export const getFetch = async ( id: string ) : Promise<ItemDetail> => {
    
    const resp = await fetch( `http://localhost:3000/api/items/item/${id}` );
    return resp.json();

}

