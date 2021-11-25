import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonContent, useIonAlert } from '@ionic/react';
import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, set, onValue, push, child, update } from 'firebase/database';

const AddProductForm = ({
  name,
  description,
  setName,
  setDescription,
  opened,
  setOpened,
  pao,
  setPao,
  volume,
  setVolume,
  price,
  setPrice,
  formModal,
  setFormModal,
  uid,
  productsArray,
}) => {
  const [present] = useIonAlert();

  const productsName = productsArray.map((product) => product.name);

  const readFromDatabase = () => {
    const productsRef = ref(db, 'users/' + uid + '/products/');
    let productsData;
    onValue(productsRef, (snapshot) => {
      productsData = snapshot.val();
    });
    return productsData;
  };

  const writeToDatabase = (name, description, opened, pao, volume, price) => {
    if (name === '') {
      present({
        cssClass: 'my-css',
        header: 'Alert',
        message: 'Please add a product name!',
        buttons: [{ text: 'Ok', handler: (d) => console.log('ok pressed') }],
        onDidDismiss: (e) => console.log('did dismiss'),
      });
    } else if (productsName.includes(name)) {
      present({
        cssClass: 'my-css',
        header: 'Alert',
        message: 'Name already exists! Please provide a different one :)',
        buttons: [{ text: 'Ok', handler: (d) => console.log('ok pressed') }],
        onDidDismiss: (e) => console.log('did dismiss'),
      });
    } else {
      const productData = { name, description, opened, pao, volume, price };
      const newProductKey = push(child(ref(db), 'products')).key;
      productData.id = newProductKey;

      const updates = {};
      updates[`/users/${uid}/products/${newProductKey}`] = productData;

      return update(ref(db), updates);
    }
  };

  // const checkLength = (str) => {
  //   if (str === '') {
  //     return <IonAlert>Please enter a name!</IonAlert>;
  //   }
  // };

  return (
    <IonContent fullscreen>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Product Name</IonLabel>
          <IonInput data-testid='inputName' value={name} placeholder="Product name" onIonChange={(e) => setName(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Description</IonLabel>
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
          <IonInput value={pao} placeholder="Period after opening" onIonChange={(e) => setPao(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Volume</IonLabel>
          <IonInput value={volume} placeholder="Volume" onIonChange={(e) => setVolume(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Price</IonLabel>
          <IonInput value={price} placeholder="Price" onIonChange={(e) => setPrice(e.detail.value)} />
        </IonItem>
      </IonList>

      <IonButton
        color="add-btn"
        expand="block"
        className="add-btn"
        onClick={async (e) => {
          e.preventDefault();
          // productsIdx = await readFromDatabase().length;
          // await checkLength(name);
          await writeToDatabase(name, description, opened, pao, volume, price);
          setFormModal({ isOpen: false });
        }}
      >
        Submit
      </IonButton>
    </IonContent>
  );
};

export default AddProductForm;
