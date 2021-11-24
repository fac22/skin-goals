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
  IonModal,
} from '@ionic/react';
import { ref, onValue } from '@firebase/database';
import { db } from '../firebase';
import './MyRoutines.css';
import RoutineBuilder from '../components/RoutineBuilder';

const MyRoutines = ({ user }) => {
  const [routines, setRoutines] = useState([]);
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState({ isOpen: false });

  const uid = user.uid;
  console.log('routines', routines);
  console.log('products', products);

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
        {routines?.length ? (
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
        <IonButton
          expand="full"
          style={{ margin: 14 }}
          onClick={() => {
            setModal({ isOpen: true });
          }}
        >
          Create new routine
        </IonButton>
        <IonModal isOpen={modal.isOpen}>
          <RoutineBuilder uid={uid} products={products} routines={routines} setModal={setModal} />
          <IonButton
            onClick={() => {
              setModal({ isOpen: false });
            }}
          >
            Close
          </IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MyRoutines;
