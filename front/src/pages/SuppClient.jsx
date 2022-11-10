import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './../components/Header';
import Footer from './../components/Footer';
import parse from 'html-react-parser';


const SuppClient = () => {
  const [succes, setSucces] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.delete(`http://localhost:4000/clients/${id}`)
      .then((res) => {
        setSucces(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  let classeAlert = succes === true ? "success" : "danger";

  let msg = succes === true ?
    `Suppression faite avec succes. <a href="/" class="alert-link">Cliquez ici </a>pour aller à la page d'accueil.`
    :
    `Echec de la suppression. <a href="/clients/${id}" class="alert-link">Cliquez ici </a>  Pour revenir à la page du client.`;


  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className={`my-5 alert alert-${classeAlert}`} role="alert">
            {parse(msg)}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SuppClient;