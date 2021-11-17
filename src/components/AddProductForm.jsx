import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from '@ionic/react';
import React from 'react';

const AddProductForm = ({ name, description, setName, setDescription }) => {
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

      <IonButton
        color="add-btn"
        expand="block"
        className="add-btn"
        // onClick={(e) => {
        //   e.preventDefault();
        //   setName([...creams, text]);
        //   setText('');
        // }}
      >
        Submit product information
      </IonButton>
    </div>
  );
};

export default AddProductForm;
