import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/react';
import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, set, onValue } from 'firebase/database';

import creamsArr from '../creams-data.js';

let productsIdx = 0;


const AddProductForm = ({ name, description, setName, setDescription, opened, setOpened, creams, setCreams, formModal, setFormModal, uid }) => {

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
  // let id = () => Math.floor(Math.random() * 1000000);
  // const creamObj = { id: id, name: '' };

  // const updateObject = (name) => {
  //   creamObj.id = id();
  //   creamObj.name = name;
  //   console.log(creamObj);
  // };

  // const addCream = async () => {
  //   await setName(name);
  //   await setDescription(description);
  //   await updateObject(name);
  //   setCreams([...creams, creamObj]);

  //   setName('');
  //   setDescription('');
  // };

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
      </IonList>

      <IonButton
        color="add-btn"
        expand="block"
        className="add-btn"
        onClick={async (e) => {
          e.preventDefault();
          // await addCream();
          productsIdx = await readFromDatabase().length;
          // console.log('INSIDE CLICK BUTTON', productsArr);

          await writeToDatabase(name, description, opened, 'test', 'test', 'test');

          setFormModal({ isOpen: false});
          // console.log(creams);
        }}
      >
        Submit product information
      </IonButton>
    </div>
  );
};

export default AddProductForm;
