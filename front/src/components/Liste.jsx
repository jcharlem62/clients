import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Client from './Client';

const Liste = () => {
  const [clients, setClients] = useState([]);
  const [rechercheClients, setRechercheClients] = useState([]);
  const [tri, setTri] = useState(null);



  useEffect(() => {
    axios
      // requete : verbe http + url :  ca donne une promesse
      .get(`http://localhost:4000/clients`)
      // reponse du serveur : res est la réponse du serveur
      .then((res) => {
        // traitement apres requete (data pour avoir les données, s'appelle data obligatoirement)
        setClients(res.data); // mettre les données dans une variable
        setRechercheClients(res.data);
      })
      // trt en cas d'erreur
      .catch(err => {
        console.log(err);
      });

  }, []);


  const chercher = (e) => {
    // la valeur recherchée (nom de la societe)
    const rech = e.target.value;
    if (rech !== '') {
      const rtRecherche = clients.filter((client) => {
        return client.societe.toLowerCase().startsWith(rech.toLowerCase());
      })
      console.log(rtRecherche);
      setRechercheClients(rtRecherche);
    }
    else {
      setRechercheClients(clients);
    }
  }

  const typeTri = (e) => {
    e.preventDefault();
    setTri(e.target.getAttribute("id"));
  }

  const triTab = (a, b) => {
    if (tri === "top") { return b.ca - a.ca; }
    else if (tri === "down") {
      return a.ca - b.ca;
    }
  }



  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <form>
            <div className="form-group m-2 d-flex justify-content-center">
              <div class="input-group w-25">
                <div class="input-group-text" id="btnGroupAddon">Recherche</div>
                <input type="text" className="form-control" id="societe" onChange={chercher} />
              </div>
              <button className="btn btn-success ms-2 top" id="top" onClick={typeTri}> Le plus grand </button>
              <button className="btn btn-danger ms-2 down" id="down" onClick={typeTri}> Le plus petit </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            rechercheClients.length === 0 ? <h1> Aucun client n'a été trouvé</h1> :
              rechercheClients.sort(triTab).map(client =>
                <Client key={client.id} client={client} />
              )
          }
          { }
        </div>
      </div>

    </div>
  );
}

export default Liste;