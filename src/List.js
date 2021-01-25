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
      <h1>Liste des contacts téléphoniques</h1>
      <div className="container">
        {person.map((list, index) => {
          const { id, name, numero, photo } = list;
          return (
            <div className="contact" key={id}>
              <div className="Image">
                <img src={photo }alt={name} />
              </div>
              <div className="Information">
                <h4>{name}</h4>
                <p>{numero}</p>
              </div>
              <button type="button" className="btn btn-primary" onClick={() => handleRemove(list)}>Delete</button>
            </div>
          );
        })}
        <button type="button" className="btn btn-danger" onClick={() => setPerson([])}>Clear List</button>
      </div>
    </React.Fragment>
  );
};
export default List;
