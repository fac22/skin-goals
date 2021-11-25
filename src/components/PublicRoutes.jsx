import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, ellipse, fileTrayFullOutline, flask, receipt, skull, warning } from 'ionicons/icons';

import Home from '../pages/Home';
import MyRoutines from '../pages/MyRoutines';
import MyProducts from '../pages/MyProducts';
import SkincareRules from '../pages/SkincareRules';

const PublicRoutes = ({ user }) => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home user={user} />
          </Route>
          <Route exact path="/myRoutines">
            <MyRoutines user={user} />
          </Route>
          <Route exact path="/myProducts">
            <MyProducts user={user} />
          </Route>
          <Route exact path="/skincareRules">
            <SkincareRules user={user} />
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
          {/* <Route path="/skincareRules">
            <Redirect to="/home" />
          </Route> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="myRoutines" href="/myRoutines">
            <IonIcon icon={receipt} />
            <IonLabel>Routines</IonLabel>
          </IonTabButton>
          <IonTabButton tab="myProducts" href="/myProducts">
            <IonIcon icon={flask} />
            <IonLabel>My Products</IonLabel>
          </IonTabButton>
          <IonTabButton tab="skincareRules" href="/skincareRules">
            <IonIcon icon={warning} />
            <IonLabel>Skincare Rules</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default PublicRoutes;
