import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Introduction from './pages/Introduction';
import FlashRom from './pages/FlashRom';
import NavigationLayout from './components/NavigationLayout';
import routes from './constants/routes.json';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <NavigationLayout>
          <Route exact path={routes['Introdução']} component={Introduction} />
          <Route path={routes['Flash Rom']} component={FlashRom} />
        </NavigationLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;