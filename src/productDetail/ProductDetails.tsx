import { useParams } from "react-router-dom";
import { getFetch } from "./services/getProductById";
import { useEffect, useState } from "react";
import { ItemDetail } from "../models/Items";
import './ProductDetails.scss';

export const ProductDetails = () => {

  const location = useParams();
  const [item, setItem] = useState<ItemDetail>();

  const getData = async () => {

    const id = location.id as string;
    const data = await getFetch(id);
    setItem(data);

  }

  useEffect(() => {
    getData();
  },[])

  return (
    <section className="container bg-white my-20">
      <div className="row">
        <div className="float col-1">
        <img src={item?.picture} alt={item?.title}  className="imgMain"/>
        </div>
        <div className="float col-2">
        <span className="state">{`${item?.condition} - ${item?.sold_quantity}`}</span>
        <h1 className="title">{item?.title}</h1>
        <span className="price">{`$ ${item?.price?.amount}`}</span>
        <button className="buyButton">Comprar</button>
        </div>
      </div>

      <article className="description">
        <h2>Descripción del producto</h2>
        <p>
          {item?.description}
        </p>
      </article>
    </section>
  )
}
