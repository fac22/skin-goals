import React from 'react';
import { useState, useEffect } from 'react';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonInput,
  useIonModal,
  IonItem,
} from '@ionic/react';
import { addOutline, cloudDoneOutline } from 'ionicons/icons';

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
  const [text, setText] = useState('');
  const [creams, setCreams] = useState([
    'Retinol',
    'Salicylic Acid',
    'Vitamin C',
    'Hyaluronic Acid',
    'SPF',
    'hello',
  ]);

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

        <IonItem>
          <IonInput
            value={text}
            placeholder="Add cream"
            onIonChange={(e) => {
              console.log(e.detail.value);
              setText(e.detail.value);
            }}
          />
        </IonItem>

        <IonButton
          color="add-btn"
          expand="block"
          className="add-btn"
          onClick={(e) => {
            e.preventDefault();
            setCreams([...creams, text]);
            setText('');
            // creams.push(text);
            console.log(creams);
          }}
        >
          Add product <IonIcon icon={addOutline} />
        </IonButton>
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
