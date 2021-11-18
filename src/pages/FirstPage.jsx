import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/react';
import React from 'react';

const FirstPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SkinGoals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SkinGoals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton href="/login">Login</IonButton>
        <IonButton routerLink="/signup" color="secondary">
          Signup
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FirstPage;
