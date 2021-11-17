import React from 'react';
import { useState, useEffect } from 'react';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonInput,
  useIonModal,
  IonItem,
  IonModal,
} from '@ionic/react';
import { addOutline, cloudDoneOutline } from 'ionicons/icons';
import AddProductForm from '../components/AddProductForm';

import ExploreContainer from '../components/ExploreContainer';
import './MyProducts.css';

const creamsArr = [
  'Retinol',
  'Salicylic Acid',
  'Vitamin C',
  'Hyaluronic Acid',
  'SPF',
  'hello',
];

const MyProducts = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [creams, setCreams] = useState([...creamsArr]);
  const [myModal, setMyModal] = useState({ isOpen: false });
  const [formModal, setFormModal] = useState({ isOpen: false });

  // const readInput = (e) => {
  //   e.preventDefault();
  //   setCreams([...creams, text]);
  //   setText('');
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Products</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* <ExploreContainer name="Tab 3 page" /> */}
        <section>
          <div className="grid">
            {creams.map((cream) => {
              return (
                <div
                  onClick={() => setMyModal({ isOpen: true })}
                  className="cream"
                >
                  {cream}
                </div>
              );
            })}
          </div>
          {/* ---------------------   MODAL for each cream */}
          <IonModal isOpen={myModal.isOpen}>
            <h1>This is a modal</h1>
            <IonButton onClick={() => setMyModal({ isOpen: false })}>
              Close Modal
            </IonButton>
          </IonModal>
        </section>

        {/* ---------------------   button opens form modal */}
        <IonButton
          color="add-btn"
          expand="block"
          className="add-btn"
          onClick={() => setFormModal({ isOpen: true })}
        >
          Add product <IonIcon icon={addOutline} />
        </IonButton>
        <IonModal isOpen={formModal.isOpen}>
          <AddProductForm />
          <IonButton onClick={() => setFormModal({ isOpen: false })}>
            Close Modal
          </IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MyProducts;
