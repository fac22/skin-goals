import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
} from '@ionic/react';
import React from 'react';

const AddProductForm = ({ name, description }) => {
  return (
    <div>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Product Name</IonLabel>
          <IonInput value={name} placeholder="Product name" />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Product Description</IonLabel>
          <IonTextarea value={description} placeholder="Product description" />
        </IonItem>
      </IonList>
    </div>
  );
};

export default AddProductForm;
