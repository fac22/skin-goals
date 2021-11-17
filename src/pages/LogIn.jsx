import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

const LogIn = () => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

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
        <IonInput placeholder="Username" />
        <IonInput placeholder="Password" />
        <IonButton>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
