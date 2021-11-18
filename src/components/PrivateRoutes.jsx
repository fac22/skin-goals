import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';

const PrivateRoutes = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {/****** AUTH CREATE ACCOUNT */}
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        {/* <Route path="/" render={() => <Redirect to="/login" />} /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default PrivateRoutes;
