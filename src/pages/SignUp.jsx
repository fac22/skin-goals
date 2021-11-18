import React from 'react';
import { useAuth } from '../contexts/AuthContext';

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

const SignUp = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cpassword, setCPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  function createAccount() {
    console.log(username, email, password);
  }
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
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => {
              setUsername(e.detail.value);
            }}
            placeholder="Username"
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Email Address</IonLabel>
          <IonInput value={email} placeholder="Your email address" onIonChange={(e) => setEmail(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput value={password} placeholder="Password" onIonChange={(e) => setPassword(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Confirm password</IonLabel>
          <IonInput
            value={cpassword}
            placeholder="Confirm password"
            onIonChange={(e) => setCPassword(e.detail.value)}
          />
        </IonItem>
        <div style={{ padding: 8 }}>
          <IonButton expand="full" style={{ margin: 14 }} onClick={createAccount}>
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
