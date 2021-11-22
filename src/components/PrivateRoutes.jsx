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

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/home">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/myProducts">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/myRoutines">
          <Redirect to="/login" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default PrivateRoutes;
