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
import UserErrorCard from '../components/UserErrorCard';
import { auth, db } from '../firebase';
import { ref, set } from 'firebase/database';

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState({
    message: "",
    hasError: false
  });

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
      //removes Firebase from the error message
      const errorMsg = error.message.split('(')[1].replace(')', "").replace('.', "")
      let formattedErrorMsg; //display message for user

      switch(errorMsg) {
        case "auth/internal-error":
          formattedErrorMsg = "Email is not in the correct format."
          break
        case "auth/weak-password":
          formattedErrorMsg = "Password should be at least 6 characters."
          break
      }
      setError({
        message: formattedErrorMsg,
        hasError: true
      })
    }
  };

  //handles removing the error message
  const exitError = () => {
    setError({
      message: "",
      hasError: false
    })
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
        {error.hasError ? <UserErrorCard message={error.message} exitHandler={exitError} /> : null}
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
