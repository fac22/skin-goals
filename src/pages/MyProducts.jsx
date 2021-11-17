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
  const [text, setText] = useState('');
  const [creams, setCreams] = useState([...creamsArr]);
  const [myModal, setMyModal] = useState({ isOpen: false });
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
          <IonModal isOpen={myModal.isOpen}>
            <h1>This is a modal</h1>
            <IonButton onClick={() => setMyModal({ isOpen: false })}>
              Close Modal
            </IonButton>
          </IonModal>
        </section>

        <IonItem>
          <IonInput
            value={text}
            placeholder="Add cream"
            onIonChange={(e) => {
              console.log(e.detail.value);
              setText(e.detail.value);
            }}
          />
        </IonItem>

        <IonButton
          color="add-btn"
          expand="block"
          className="add-btn"
          onClick={(e) => {
            e.preventDefault();
            setCreams([...creams, text]);
            setText('');
            // creams.push(text);
            console.log(creams);
          }}
        >
          Add product <IonIcon icon={addOutline} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default MyProducts;
