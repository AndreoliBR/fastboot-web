import React from 'react';
import Helmet from 'react-helmet';
import { Typography } from '@material-ui/core';

export default function Introduction() {
  return (
    <>
      <Helmet>
        <title>WebADB | Introdução</title>
      </Helmet>
      <Typography variant="h3" >Introdução</Typography>
      <Typography>Por enquanto, esse site não passa de uma demo.</Typography>
    </>
  );
}