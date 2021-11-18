import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from '@ionic/react';
import React from 'react';
import { useState, useEffect } from 'react';

import creamsArr from '../creams-data.js';

const AddProductForm = ({
  name,
  description,
  setName,
  setDescription,
  creams,
  setCreams,
  formModal,
  setFormModal,
}) => {
  return (
    <div>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Product Name</IonLabel>
          <IonInput
            value={name}
            placeholder="Product name"
            onIonChange={(e) => setName(e.detail.value)}
          />
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
        onClick={(e) => {
          e.preventDefault();
          setName(name);
          setCreams([...creams, name]);
          setName('');
          console.log(creams);
          setDescription(description);
          setFormModal({ isOpen: false });
        }}
      >
        Submit product information
      </IonButton>
    </div>
  );
};

export default AddProductForm;
