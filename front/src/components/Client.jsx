import React from 'react'
import { Link } from 'react-router-dom';

// Le composant fils (Client) reçoit les props du composant parent (Liste)
// on recoit les différentes props sous forme d'objet json
const Client = ({ client}) => {

  return (
    <div className="card w-25 m-3">
      <div className="card-body">
        <h5 className="card-title">{client.prenom} {client.nom}</h5>
        <p className="card-text">"{client.societe} - {client.ca}</p>
        <Link to={`/clients/${client.id}`} className="btn btn-primary">Voir</Link>
      </div>
    </div>

  );
}

export default Client;