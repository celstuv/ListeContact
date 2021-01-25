import React, { useState } from 'react';
import { ListContact } from './Data';


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
      <div className="container">
        <h1>Liste des contact téléphonques</h1>
        {person.map((list, index) => {
          const { id, name, numero, photo } = list;
          return (
            <div className="contact" key={id}>
              <div className="Image">
                <img src={photo }alt={name} />
              </div>
              <div className="Information">
                <p>{name}</p>
                <p>{numero}</p>
              </div>
              <button type="button" onClick={() => handleRemove(list)}>Delete</button>
            </div>
          );
        })}
      </div>
      <button type="button" onClick={() => setPerson([])}>Clear List</button>
    </React.Fragment>
  );
};
export default List;
