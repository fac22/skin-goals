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
  IonIcon,
} from '@ionic/react';
import { ref, onValue, remove } from '@firebase/database';
import { db } from '../firebase';
import './MyRoutines.css';
import RoutineBuilder from '../components/RoutineBuilder';
import { trash } from 'ionicons/icons';

const MyRoutines = ({ user }) => {
  const [routines, setRoutines] = useState([]);
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState({ isOpen: false });
  const [deleteModal, setDeleteModal] = useState({ isOpen: false });
  const [routineToDelete, setRoutineToDelete] = useState('');

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

  function deleteRoutine(routineId) {
    const routineRef = ref(db, `users/${uid}/routines/${routineId}`);
    remove(routineRef);
  }

  const slideOpts = {
    initialSlide: 0,
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
          <IonSlides pager={true} options={slideOpts} key={routines.map((routine) => routine.id).join('_')}>
            {routines.map((routine) => (
              <IonSlide key={routine.id}>
                <div style={{ display: 'flex' }}>
                  <h2 style={{ marginRight: '3rem' }}>{routine.name}</h2>{' '}
                  <IonButton
                    onClick={() => {
                      setRoutineToDelete(`${routine.id}`);
                      setDeleteModal({ isOpen: true });
                    }}
                  >
                    <IonIcon icon={trash} />
                  </IonButton>
                </div>
                <IonList>
                  {routine.productIds.map((product) => (
                    <IonItem key={product.id}>
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

        <IonModal isOpen={deleteModal.isOpen}>
          <p>Are you sure you want to delete this?</p>
          <IonButton
            onClick={() => {
              console.log(routineToDelete);
              deleteRoutine(routineToDelete);
              setDeleteModal({ isOpen: false });
            }}
          >
            Yes
          </IonButton>
          <IonButton
            onClick={() => {
              setDeleteModal({ isOpen: false });
            }}
          >
            No
          </IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MyRoutines;
