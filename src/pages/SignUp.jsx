import { useState } from 'react';
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
  const [name, setName] = useState('');

  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

      const uid = user.user.uid;
      const userDataToWrite = {
        name,
        uid,
      };
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
          <IonLabel position="floating">Name</IonLabel>
          <IonInput
            value={name}
            onIonChange={(e) => {
              setName(e.detail.value);
            }}
            placeholder="Name"
          />
        </IonItem>

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
            type="password"
            value={registerPassword}
            placeholder="Password"
            onIonChange={(e) => setRegisterPassword(e.detail.value)}
          />
        </IonItem>

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
