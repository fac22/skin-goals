import { IonContent, IonHeader, IonPage, IonToolbar, IonTitle } from '@ionic/react';
import './Home.css';
import { useState, useEffect } from 'react';

import { ref, onValue } from '@firebase/database';
import { db } from '../firebase';

import ProfilePopover from '../components/ProfilePopover';
import HomeFirstCard from '../components/HomeFirstCard';
import HomeRoutineCard from '../components/HomeRoutineCard';

const Home = ({ user }) => {
  const [routines, setRoutines] = useState([]);
  const [products, setProducts] = useState([]);

  const uid = user.uid;

  useEffect(() => {
    const routinesRef = ref(db, 'users/' + uid + '/routines');
    onValue(routinesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setRoutines(Object.values(data));
      } else {
        setRoutines([]);
      }
    });
    const productsRef = ref(db, 'users/' + uid + '/products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      setProducts(data);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SkinGoals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <ProfilePopover />
        {routines?.length ? (
          <HomeRoutineCard user={user} routines={routines} products={products} />
        ) : (
          <HomeFirstCard user={user} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
