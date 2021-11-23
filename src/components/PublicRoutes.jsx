import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, ellipse, fileTrayFullOutline } from 'ionicons/icons';

import Home from '../pages/Home';
import MyRoutines from '../pages/MyRoutines';
import RoutineBuilder from '../pages/RoutineBuilder';
import MyProducts from '../pages/MyProducts';

const PublicRoutes = ({ user }) => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home user={user} />
          </Route>
          <Route exact path="/myRoutines">
            <MyRoutines />
          </Route>
          <Route exact path="/routineBuilder">
            <RoutineBuilder />
          </Route>
          <Route path="/myProducts">
            <MyProducts user={user} />
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/login">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/signup">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="myRoutines" href="/myRoutines">
            <IonIcon icon={ellipse} />
            <IonLabel>Routines</IonLabel>
          </IonTabButton>
          <IonTabButton tab="myProducts" href="/myProducts">
            <IonIcon icon={fileTrayFullOutline} />
            <IonLabel>My Products</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default PublicRoutes;
