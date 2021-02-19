import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Introduction from './pages/Introduction';
import NavigationLayout from './components/NavigationLayout';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <NavigationLayout>
          <Route exact path="/" component={Introduction} />
        </NavigationLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;