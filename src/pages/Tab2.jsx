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
  IonSlides,
  IonSlide,
} from '@ionic/react';
import './Tab2.css';

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const items = ['Cleanser', 'Toner', 'Moisturiser'];

console.log(items);

function doReorder(event) {
  console.log(event.detail.from, event.detail.to);
  const movingItem = items.splice(event.detail.from, 1);
  items.splice(event.detail.to, 0, movingItem[0]);
  event.detail.complete();
  console.log(items);
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

        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <h1>Slide 1</h1>
          </IonSlide>
          <IonSlide>
            <h1>Slide 2</h1>
          </IonSlide>
          <IonSlide>
            <h1>Slide 3</h1>
          </IonSlide>
        </IonSlides>

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
