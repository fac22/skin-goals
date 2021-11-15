import React from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonReorder,
  IonReorderGroup,
} from '@ionic/react';
import './Tab2.css';

const items = ['Cleanser', 'Toner', 'Moisturiser'];

function doReorder(event) {
  console.log('items before: ', items);
  console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
  const movingItem = items.splice(event.detail.from, 1);
  items.splice(event.detail.to, 0, movingItem[0]);
  event.detail.complete();
  console.log('items after: ', items);
}

const Tab2 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Routines</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Routines</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          <IonItem>
            <IonLabel>Cleanser</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>Toner</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>Moisturiser</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
        </IonReorderGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
