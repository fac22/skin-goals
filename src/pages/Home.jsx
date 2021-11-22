import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
} from '@ionic/react';
import './Home.css';
import { person } from 'ionicons/icons';
const Home = ({ user }) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  // const [loginEmail, setLoginEmail] = useState('');
  // const [loginPassword, setLoginPassword] = useState('');
  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  // const signup = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // const logout = async () => {
  //   await signOut(auth);
  // };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SkinGoals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {/* <p>Signup</p>
        <input
          placeholder="email"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <button onClick={signup}>signup</button>

        <p>login</p>
        <input
          placeholder="email"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <button onClick={login}>login</button>

        <p>logged in user: {user?.email}</p>
        <button onClick={logout}>logout</button> */}

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonButton size="large" fill="clear" slot="end" shape="round">
              <IonIcon icon={person} />
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Hello {user.email}</IonCardSubtitle>
            <IonCardTitle>
              Great skin is not simply a matter of DNA — your daily habits, in fact, have a big impact on what you see
              in the mirror.
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Start today, create your first routine</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
