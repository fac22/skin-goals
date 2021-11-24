import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonLabel, IonIcon } from '@ionic/react';
import React from 'react';
import { person } from 'ionicons/icons';

const Profile = ({ user }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonAvatar>
          <IonIcon icon={person} />
          <IonLabel>{user.email}</IonLabel>
        </IonAvatar>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
