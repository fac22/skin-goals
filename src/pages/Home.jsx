import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonChip,
  IonAvatar,
} from '@ionic/react';
import './Home.css';
import { person } from 'ionicons/icons';
const Home = ({ user }) => {
  const logout = async () => {
    await signOut(auth);
  };
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
            <IonButton href="/profile" size="large" fill="clear" slot="end" shape="round">
              {/* <IonIcon icon={person} /> */}
              <IonChip>
                <IonAvatar>
                  <IonIcon icon={person} />
                </IonAvatar>
                <IonLabel>{user.email}</IonLabel>
              </IonChip>
            </IonButton>
            <IonButton onClick={logout}>logout</IonButton>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Hello {user.email}</IonCardSubtitle>
            <IonCardTitle>
              Great skin is not simply a matter of DNA — your daily habits, in fact, have a big impact on what you see
              in the mirror.
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Start today, create your first routine</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
