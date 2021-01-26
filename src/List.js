import React, { useState } from 'react';
import { ListContact } from './Data';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import CardDeck from 'react-bootstrap/CardDeck'


const List = () => {
  const [person, setPerson] = useState(ListContact);
  //console.log(person);


  const handleRemove = (list) => {
    const newList = person.filter((item) => item.id !== list.id);
    setPerson(newList);
    /*Récupérer la variable contenant l'id.
    créer nouvelle variable contenant les nouvelles données filtrées par la suppressions*/
  };

  return (
    <React.Fragment>
      <div className="container" style={{ color: "black" }}>
        <h1 style={{ marginBottom: "5rem" }}>Liste des contacts téléphoniques</h1>
        <div className="row justify-content-center">
            {person.map((list, index) => {
              const { id, name, numero, photo } = list;
              return (
                <div className="col my-3" key={id} >
                  <div className="card" style={{ width: "10rem" }}>
                    <Image src={photo} alt={name} rounded  className="" />
                    <h4>{name}</h4>
                    <p style={{ fontSize: "0.75rem" }}> Numéro : {numero}</p>
                    <button type="button" className="btn btn-primary" onClick={() => handleRemove(list)}>Supprimer contact</button>
                  </div>
                </div>
              );
            })}
        </div>
      <button type="button" className="btn btn-danger" onClick={() => setPerson([])}>Supprimre tous les contacts</button>
    </div>
    </React.Fragment>
  );
};
export default List;
