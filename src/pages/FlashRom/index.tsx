import React from 'react';
import {
  CssBaseline,
  Container,
  Paper,
} from '@material-ui/core';
import Helmet from 'react-helmet';

const FlashRom: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>GrusADB | Flash Rom</title>
      </Helmet>
    </>
  );
}

export default FlashRom;