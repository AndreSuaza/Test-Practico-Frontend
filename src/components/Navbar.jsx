import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import './Navbar.scss';

export const Navbar = () => {

    const { searchText , onInputChange } = useForm();
    const navigate = useNavigate();

    const onSearchSubmit = (event) =>{
      event.preventDefault();
      navigate(`/items?search=${ searchText }`);
      window.location.reload(); 
    }


    return (
      <nav className="nav">
        <div className="container">
          <img src="Logo_ML.png" alt="Logo MELI" className="imgLogo float"/>
          <div className="searcher">
            <form onSubmit={ onSearchSubmit }>

              <input 
                type="text"
                placeholder="Nunca dejes de buscar"
                name="searchText"
                value={ searchText }
                onChange={ onInputChange }
                className="input float"
              />
              

              <button className="button"/>
          
            </form>
          </div>
        </div>
      </nav>
    )
}