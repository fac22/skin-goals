import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, ellipse, fileTrayFullOutline } from 'ionicons/icons';

import Home from './pages/Home';
import MyRoutines from './pages/MyRoutines';
import MyProducts from './pages/MyProducts';
import PrivateRoutes from './components/PrivateRoutes';
import PublicRoutes from './components/ PublicRoutes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <PrivateRoutes />
    <PublicRoutes />
  </IonApp>
);

// const App = () => {
//   const { store } = React.useContext(MobXProviderContext);

//   return !store.authCheckComplete ? (
//     <IonApp>
//       <IonLoading message="Starting App..." />
//     </IonApp>
//   ) : (
//     <IonApp>{store.authenticatedUser ? <PublicRoutes /> : <PrivateRoutes />}</IonApp>
//   );
// };

export default App;
