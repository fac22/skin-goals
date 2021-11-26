import React from 'react'
import { IonCard, IonItem, IonIcon, IonLabel, IonButton  } from '@ionic/react'
import { warning, close } from 'ionicons/icons'


/**
 * This card is used to show errors for login and signup pages
 */

const UserErrorCard = ({message, exitHandler}) => {
  return (
    <IonCard>
      <IonItem color="danger">
        <IonIcon color="light" icon={warning} slot="start" />
        <IonLabel color="light">{message}</IonLabel>
        <IonButton fill="clear" color="light" slot="end" onClick={() => exitHandler()}>
          <IonIcon slot="icon-only" icon={close} />
        </IonButton>
      </IonItem>
    </IonCard>
  )
};

export default UserErrorCard