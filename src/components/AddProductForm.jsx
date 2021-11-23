import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/react';
import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, set, onValue } from 'firebase/database';

import creamsArr from '../creams-data.js';

let productsIdx = 0;


const AddProductForm = ({ name, description, setName, setDescription, opened, setOpened, pao, setPao, volume, setVolume, price, setPrice, formModal, setFormModal, uid }) => {

const readFromDatabase = () => {
const productsRef = ref(db, 'users/' + uid + '/products/');
let productsData;
onValue(productsRef, snapshot => {
  productsData = snapshot.val();
});
return productsData;
}


 const writeToDatabase = (name, description, opened, pao, volume, price) => {

set(ref(db, 'users/' + uid + `/products/${productsIdx}`), {
  name, description, opened, pao, volume, price
})
 }

  return (
    <div>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Product Name</IonLabel>
          <IonInput value={name} placeholder="Product name" onIonChange={(e) => setName(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Product Description</IonLabel>
          <IonTextarea
            value={description}
            placeholder="Product description"
            onIonChange={(e) => setDescription(e.detail.value)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Open date</IonLabel>
          <IonInput value={opened} placeholder="Open date" onIonChange={(e) => setOpened(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">PAO</IonLabel>
          <IonInput value={pao} placeholder="Open date" onIonChange={(e) => setPao(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Volume</IonLabel>
          <IonInput value={volume} placeholder="Open date" onIonChange={(e) => setVolume(e.detail.value)} />
        </IonItem>
        
        <IonItem>
          <IonLabel position="floating">Price</IonLabel>
          <IonInput value={price} placeholder="Open date" onIonChange={(e) => setPrice(e.detail.value)} />
        </IonItem>
      </IonList>

      <IonButton
        color="add-btn"
        expand="block"
        className="add-btn"
        onClick={async (e) => {
          e.preventDefault();
          productsIdx = await readFromDatabase().length;
          await writeToDatabase(name, description, opened, pao, volume, price);
          setFormModal({ isOpen: false});
        }}
      >
        Submit product information
      </IonButton>
    </div>
  );
};

export default AddProductForm;
