import React, { useState } from 'react';
import {
  IonButtons,
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonToolbar,
  IonLabel,
  IonTitle,
} from '@ionic/react';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth, db } from '../firebase';
import { ref, set } from 'firebase/database';

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      const uid = user.user.uid;
      const userDataToWrite = {
        products: ['No Products'],
        routines: { 'No Routines': 'No Routines' },
      };
      console.log(userDataToWrite);
      await set(ref(db, 'users/' + uid), userDataToWrite);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Account</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email Address</IonLabel>
          <IonInput
            value={registerEmail}
            placeholder="Your email address"
            onIonChange={(e) => setRegisterEmail(e.detail.value)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            value={registerPassword}
            placeholder="Password"
            onIonChange={(e) => setRegisterPassword(e.detail.value)}
          />
        </IonItem>

        {/* <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => {
              setUsername(e.detail.value);
            }}
            placeholder="Username"
          />
        </IonItem> */}

        {/* <IonItem>
          <IonLabel position="floating">Confirm password</IonLabel>
          <IonInput
            value={cpassword}
            placeholder="Confirm password"
            onIonChange={(e) => setCPassword(e.detail.value)}
          />
        </IonItem> */}

        <div style={{ padding: 8 }}>
          <IonButton expand="full" style={{ margin: 14 }} onClick={signup}>
            Create Account
          </IonButton>
          <p> Already have an account? </p>
          <IonButton href="/login">Login</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
