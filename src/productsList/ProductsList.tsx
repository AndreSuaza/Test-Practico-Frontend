import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';
import { getFetch } from "./services/getProducts";
import { Item } from "../models/Items";
import { useNavigate } from "react-router-dom";
import './ProductsList.scss';

export const ProductsList = () => {

  const [location] = useSearchParams();
  const [items, setItems] = useState<Item[]>([]);
  const navigate = useNavigate(); 

  const getData = async () => {

    const query = location.get('search') as string;
    const data = await getFetch(query);
    setItems(data.items);

  }

  useEffect(() => {
    getData();
  },[])
  

  const goToProduct = (id: string) => {
    return navigate(`/item/${id}`);
  }

  return (
    <div className="container bg-white">
      
      { items.length > 0 

        ? <ul>
            {items.map( item => 
            <li key={item.id as string} onClick={() => goToProduct(item.id)} className="pointer">
              <section className="endFloat">
                <div className="float">
                  <img src={item.picture} alt={item.title} className="img-product"/>
                </div>
                <div className="float ml-10">
                  <h2>{`$ ${item.price.amount}`} {item.free_shipping && <img src="ic_shipping.png"/>}</h2>
                  <h1>{item.title}</h1>
                </div>
              </section>
            </li>) 
            }
          </ul>
        : <h1>no resultados</h1> }
    </div>
  )
}
