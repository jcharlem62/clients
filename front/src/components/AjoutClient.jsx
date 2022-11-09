import React, { useState } from 'react';
import axios from "axios";
import Client from './Client';
import { Link } from "react-router-dom";


const AjoutClient = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [societe, setSociete] = useState('');
  const [ca, setCa] = useState('');
  const [ajout, setAjout] = useState(false);
  const [client, setClient] = useState({});
 
  const modifPrenom = (e) => {
    setPrenom(e.target.value);
  }
  const modifNom = (e) => {
    setNom(e.target.value);
  }
  const modifSociete = (e) => {
    setSociete(e.target.value);
  }
  const modifCa = (e) => {
    setCa(e.target.value);
  }

  const ajoutContact = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/clients`, { id : null, nom, prenom, societe, ca })
      .then((res) => {
        setClient(res.data);
        console.log(res.data);
        setAjout(true);
        setPrenom("");
        setNom("");
        setSociete("");
        setCa("");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const setAjoutFalse = () => {
    setAjout(false);
  }

  const form = <form className="my-5">
    <div className="form-group">
      <label htmlFor="prenom">Prénom</label>
      <input type="text" className="form-control" id="prenom" onChange={modifPrenom} value={prenom} />
    </div>

    <div className="form-group">
      <label htmlFor="nom">Nom</label>
      <input type="text" className="form-control" id="nom" onChange={modifNom} value={nom} />
    </div>

    <div className="form-group">
      <label htmlFor="societe">Société</label>
      <input type="text" className="form-control" id="societe" onChange={modifSociete} value={societe} />
    </div>

    <div className="form-group">
      <label htmlFor="ca">CA</label>
      <input type="number" className="form-control" id="ca" onChange={modifCa} value={ca} />
    </div>
    <input type="submit" className="btn btn-primary m-3" value="Ajouter" onClick={ajoutContact} />
    <input type="reset" className="btn btn-danger m-3" value="Réinitialiser" />
  </form>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {!ajout ? form :
            <div>
              <Client key={client.id} client={client} />
              <br />
              <Link to={`/clients/ajout`} className="btn btn-primary mb-5" onClick={setAjoutFalse}>Ajouter un autre client</Link>
            </div>
          }
          {}
        </div>
      </div>
    </div>

  );

}

export default AjoutClient;