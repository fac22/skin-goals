import React, { useState } from 'react';
import { IonApp } from '@ionic/react';
import { auth } from './firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { db } from './firebase';
import { ref, onValue } from '@firebase/database';

import PrivateRoutes from './components/PrivateRoutes';
import PublicRoutes from './components/PublicRoutes';

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

const App = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      const nameRef = ref(db, 'users/' + currentUser.uid + '/name');
      onValue(nameRef, (snapshot) => {
        const name = snapshot.val();
        currentUser.name = name;
      });
    }
    setUser(currentUser);
  });

  return <IonApp>{user?.email ? <PublicRoutes user={user} /> : <PrivateRoutes />}</IonApp>;
};

export default App;
