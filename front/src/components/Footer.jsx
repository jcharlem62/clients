import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid bg-light">
      <div className="container">
        <p className="text-center py-4">
          Copyright &copy;  {new Date().getFullYear()} - Gestion des clients
        </p>
      </div>
    </footer>
  );
}

export default Footer;
