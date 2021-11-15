import React from 'react';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Products</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 3 page" /> */}

        <IonGrid>
          <IonRow>
            <IonCol>
              <div className='grid-elem'>element 1</div>
            </IonCol>
            <IonCol>
              <div className='grid-elem'>element 2</div>
            </IonCol>
            <IonCol>
              <div className='grid-elem'>element 3</div>
            </IonCol>
            <IonCol>
              <div className='grid-elem'>element 4</div>
            </IonCol>
            
            
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
