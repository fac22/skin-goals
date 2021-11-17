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

const creams = [
  'Retinol',
  'Salicylic Acid',
  'Vitamin C',
  'Hyaluronic Acid',
  'SPF',
  'hello',
];

const Tab3 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Products</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* <ExploreContainer name="Tab 3 page" /> */}
        <section>
          <div className="grid">
            {/* <div className="cream">Retinol</div>
            <div className="cream">Salicylic Acid</div>
            <div className="cream">Vitamin C</div>
            <div className="cream">Hyaluronic Acid</div>
            <div className="cream">SPF</div> */}
            {creams.map((cream) => {
              return <div className="cream">{cream}</div>;
            })}
          </div>
        </section>
        {/* <IonGrid>
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
        </IonGrid> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
