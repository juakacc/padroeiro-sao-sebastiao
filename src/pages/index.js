import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Festa de São Sebastião</title>
        <html lang='pt-br' />
        <meta name="description" content={'Portal da festa de São Sebastião em Olivedos'} />
      </Helmet>
      <App />
    </>
  );
};
