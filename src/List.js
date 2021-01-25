import React, { useState } from 'react';
import { ListContact } from './Data';
import Card from 'react-bootstrap/Card';
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
      <div className="container">
        <h1>Liste des contacts téléphoniques</h1>
        <div className="row justify-content-center">
            {person.map((list, index) => {
              const { id, name, numero, photo } = list;
              return (
                <CardDeck>
                  <Card style={{ width: '18rem' }} key={id}>
                    <Card.Img variant="top" src={photo} alt={name} className="w-75"/>
                    <Card.Body style={{ color: 'black' }}>
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{numero}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <button type="button" className="btn btn-primary" onClick={() => handleRemove(list)}>Delete</button>
                    </Card.Footer>
                  </Card>
                </CardDeck>
              );
            })}
        </div>
      <button type="button" className="btn btn-danger" onClick={() => setPerson([])}>Clear List</button>
    </div>
    </React.Fragment>
  );
};
export default List;
