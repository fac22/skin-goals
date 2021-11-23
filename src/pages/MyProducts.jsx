import React from 'react';
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

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

import CreamsData from '../creams-data.js';
import './MyProducts.css';

// const creamsArr = [];
// CreamsData.forEach((cream) => {
//   creamsArr.push(cream.name);
// });

const MyProducts = ({user}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [opened, setOpened] = useState('');

  const [creams, setCreams] = useState([...CreamsData]);
  const [creamModal, setCreamModal] = useState({ isOpen: false, id: 0 });
  const [formModal, setFormModal] = useState({ isOpen: false });

  const [creamId, setCreamId] = useState(0);

  // ---------- temp userId
  const uid = user.uid;

  // ------------ reading from realtime database
  useEffect(() => {
    const productsRef = ref(db, 'users/' + uid + '/products');
    // console.log(productsRef);
    onValue(productsRef, (snapshot) => {
      const productsData = snapshot.val();
      console.log(productsData);
      // updateStarCount(postElement, data);
    });
  });

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
          {/* ---------------------   RENDERS all product info on page */}
          <div className="grid">
            {creams.map((cream) => {
              return (
                <section className="cream-wrapper">
                  <div
                    key={cream.id}
                    onClick={() => {
                      setCreamId(cream.id);
                      console.log(creamId);
                      setCreamModal({ isOpen: true, id: cream.id });
                    }}
                    className="cream"
                  >
                    {cream.name}
                  </div>
                </section>
              );
            })}
          </div>

          {/* ---------------------   MODAL for each cream */}
          <IonModal key={creamId} isOpen={creamModal.isOpen}>
            <h1>This is a modal with ID: {creamId}</h1>
            <IonButton onClick={() => setCreamModal({ isOpen: false, id: creamId })}>Close Modal</IonButton>
          </IonModal>
        </section>

        {/* ---------------------   button opens form modal */}
        <IonButton color="add-btn" expand="block" className="add-btn" onClick={() => setFormModal({ isOpen: true })}>
          Add product <IonIcon icon={addOutline} />
        </IonButton>

        {/* ---------------------   FORM MODAL to add a new product*/}
        <IonModal isOpen={formModal.isOpen}>
          <AddProductForm
            name={name}
            description={description}
            setName={setName}
            setDescription={setDescription}
            opened={opened}
            setOpened={setOpened}
            creams={creams}
            setCreams={setCreams}
            formModal={formModal}
            setFormModal={setFormModal}
            uid={uid}
          />
          <IonButton color="danger" onClick={() => setFormModal({ isOpen: false })}>
            Close Modal
          </IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MyProducts;
