import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonHeader,
  IonButton,
} from '@ionic/react';

const checkboxList = [
  { id: '1', val: 'Vitamin C & Retinol', isChecked: false },
  { id: '2', val: 'Vitamin C & Retinoid', isChecked: false },
  { id: '3', val: 'AHAs & Vitamin C', isChecked: false },
  { id: '4', val: 'Salicylic Acid & Retinol', isChecked: false },
  { id: '5', val: 'Salicylic Acid & Retinoid', isChecked: false },
  { id: '6', val: 'Benzoyl Peroxide & Retinol', isChecked: false },
  { id: '7', val: 'AHAs & Retinol', isChecked: false },
];

const SkincareRules = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SkinGoals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>SKINCARE INGREDIENTS YOU SHOULD NEVER MIX:</IonItemDivider>
          <br />
          <IonItemDivider>Choose the ones you don't want to mix and we can help you with an alert</IonItemDivider>

          <IonItem>
            <IonLabel>
              <strong>Select All</strong>
            </IonLabel>
            <IonCheckbox color="danger" slot="start" />
          </IonItem>
          {checkboxList.map(({ val, isChecked }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox color="danger" slot="start" value={val} checked={isChecked} />
            </IonItem>
          ))}
        </IonList>
        <IonButton
          color="add-btn"
          expand="block"
          className="add-btn"
          onClick={async (e) => {
            e.preventDefault();
            // productsIdx = await readFromDatabase().length;
            // await writeToDatabase(name, description, opened, pao, volume, price);
            // setFormModal({ isOpen: false });
          }}
        >
          Submit
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SkincareRules;
