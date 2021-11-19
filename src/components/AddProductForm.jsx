import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/react';
import React from 'react';
import { useState, useEffect } from 'react';

import creamsArr from '../creams-data.js';

const AddProductForm = ({ name, description, setName, setDescription, creams, setCreams, formModal, setFormModal }) => {
  let id = () => Math.floor(Math.random() * 1000000);
  const creamObj = { id: id, name: '' };

  const updateObject = (name) => {
    creamObj.id = id();
    creamObj.name = name;
    console.log(creamObj);
  };

  const addCream = async () => {
    await setName(name);
    await setDescription(description);
    await updateObject(name);
    setCreams([...creams, creamObj]);

    setName('');
    setDescription('');
  };

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
      </IonList>

      <IonButton
        color="add-btn"
        expand="block"
        className="add-btn"
        onClick={async (e) => {
          e.preventDefault();
          await addCream();

          setFormModal({ isOpen: false });
          console.log(creams);
        }}
      >
        Submit product information
      </IonButton>
    </div>
  );
};

export default AddProductForm;
