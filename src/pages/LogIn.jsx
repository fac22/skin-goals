import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonRouterOutlet,
} from '@ionic/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import React, { useState } from 'react';

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  // const history = useHistory();

  // const goHome = () => {
  //   return history.push('/home');
  // };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="floating">Email Address</IonLabel>
            <IonInput
              value={loginEmail}
              placeholder="Your email address"
              onIonChange={(e) => setLoginEmail(e.detail.value)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              value={loginPassword}
              placeholder="Password"
              onIonChange={(e) => setLoginPassword(e.detail.value)}
            />
          </IonItem>
        </IonList>
        <div style={{ padding: 8 }}>
          <IonButton
            expand="full"
            style={{ margin: 14 }}
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            Login
          </IonButton>
          <p> New here? </p>
          <IonButton href="/signup">Create Account</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
