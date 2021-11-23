import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonButton,
  IonSlides,
  IonSlide,
  IonList,
} from '@ionic/react';
import { ref, onValue } from '@firebase/database';
import { db } from '../firebase';
import './MyRoutines.css';

const MyRoutines = ({ user }) => {
  const [routines, setRoutines] = useState([]);
  const [products, setProducts] = useState([]);

  const uid = user.uid;

  useEffect(() => {
    const routinesRef = ref(db, 'users/' + uid + '/routines');
    onValue(routinesRef, (snapshot) => {
      const data = snapshot.val();
      setRoutines(data);
      console.log(data);
    });
    const productsRef = ref(db, 'users/' + uid + '/products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      setProducts(data);
    });
  }, []);

  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Routines</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {routines.length ? (
          <IonSlides pager={true} options={slideOpts}>
            {routines.map((routine) => (
              <IonSlide>
                <h2>{routine.name}</h2>
                <IonList>
                  {routine.productIds.map((product) => (
                    <IonItem>
                      <IonLabel>{products[product]?.name}</IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              </IonSlide>
            ))}
          </IonSlides>
        ) : (
          <p>You have no routines!</p>
        )}
        <IonButton expand="full" style={{ margin: 14 }}>
          Create new routine
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default MyRoutines;
