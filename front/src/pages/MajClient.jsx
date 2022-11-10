import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './../components/Header';
import Footer from './../components/Footer';
import parse from 'html-react-parser';

const MajClient = () => {
  const { id } = useParams();
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [societe, setSociete] = useState('');
  const [ca, setCa] = useState('');
  const [succes, setSucces] = useState(false);
  const [maj, setMaj] = useState(false);

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

  const majClient = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/clients/${id}`, { id, prenom, nom, societe, ca })
      .then((res) => {
        setSucces(true);
        setMaj(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  useEffect(() => {
    axios.get(`http://localhost:4000/clients/${id}`)
      .then((res) => {
        setPrenom(res.data.prenom);
        setNom(res.data.nom);
        setSociete(res.data.societe);
        setCa(res.data.ca);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  const form = <form>
    <div className="form-group">
      <label for="prenom">Prénom</label>
      <input type="text" className="form-control" id="prenom" onChange={modifPrenom} value={prenom} />
    </div>

    <div className="form-group">
      <label for="nom">Nom</label>
      <input type="text" className="form-control" id="nom" onChange={modifNom} value={nom} />
    </div>

    <div className="form-group">
      <label for="societe">Société</label>
      <input type="text" className="form-control" id="societe" onChange={modifSociete} value={societe} />
    </div>

    <div className="form-group">
      <label for="ca">CA</label>
      <input type="number" className="form-control" id="ca" onChange={modifCa} value={ca} />
    </div>
    <input type="submit" className="btn btn-primary m-3" value="Modifier" onClick={majClient} />
    <input type="reset" className="btn btn-danger m-3" value="Réinitialiser" />
  </form>;

  let classeAlert = succes === true ? "success" : "danger";
  let msg = succes === true ?
    `Mise à jour faite avec succes. <a href="/clients/${id}" class="alert-link">Cliquez ici </a>pour aller à la page d'accueil.`
    :
    `Echec de la mise à jour. <a href="/clients/${id}" class="alert-link">Cliquez ici </a>  Pour revenir à la page du client.`;

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">

          {
            maj === false ? form :
              <div className={`my-5 alert alert-${classeAlert}`} role="alert">
                {parse(msg)}
              </div>

          }
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MajClient;