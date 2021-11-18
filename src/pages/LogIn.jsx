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
} from '@ionic/react';
import React from 'react';

const LogIn = () => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [text, setText] = React.useState();
  const [number, setNumber] = React.useState();

  function loginUser() {
    console.log(username, password);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LogIn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput value={text} disabled></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
            value={username}
            type="text"
            placeholder="Username"
            onIonChange={(e) => setUserName(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Passord</IonLabel>
          <IonInput
            value={password}
            type="password"
            placeholder="Password"
            onIonChange={(e) => setPassword(e.target.value)}
          />
        </IonItem>
        <IonButton onClick={loginUser}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
