import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";


const Favs = () => {

  const {state, dispatch} = useContextGlobal()
  const favs = state.favs

  return (
    <section>
    <div>
      <h2>Dentists Favs</h2>      
      {favs.length > 0 && <button onClick={() => dispatch({type:"removeAllFav", payload: favs})}>Remove all</button>}
    </div>
    <div className="card-grid">
      {favs.length > 0
        ? favs.map(fav => <Card key={fav.id} dentist={favs}/>)
        : <p>No ha seleccionado ningun odontólogo como favorito</p>
      }
    </div>
  </section>
  );
}


export default Favs;
