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
} from '@ionic/react';
import React from 'react';

const LogIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function loginUser() {
    console.log(email, password);
  }

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
            <IonInput value={email} placeholder="Your email address" onIonChange={(e) => setEmail(e.detail.value)} />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={password} placeholder="Password" onIonChange={(e) => setPassword(e.detail.value)} />
          </IonItem>
        </IonList>
        <div style={{ padding: 8 }}>
          <IonButton expand="full" style={{ margin: 14 }} onClick={loginUser}>
            Login
          </IonButton>
          {/* {isAuth ? "Logged In" : "Login"} */}
          <p> New here? </p>
          <IonButton href="/login">Create Account</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
