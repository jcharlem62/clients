import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, Link } from 'react-router-dom';

const VoirClient = () => {

  let { id } = useParams();
  const [client, setClient] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:4000/clients/${id}`)
      .then((res) => {
        setClient(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  return (
    <div className="card text-center container p-0 my-5">
      <div className="card-header">
        {client.societe}
      </div>
      <div className="card-body">
        <h5 className="card-title">Société : {client.societe}</h5>
        <p className="card-text">{client.prenom} {client.nom}</p>
        CA : {client.ca}
      </div>
      <div className="card-footer text-muted">
        <Link to={`/clients/modif/${client.id}`} className="btn btn-info  me-5">Modifier</Link>
        <Link to={`/clients/supp/${client.id}`} className="btn btn-danger">Supprimer</Link>
      </div>
    </div>

  );
}

export default VoirClient;
