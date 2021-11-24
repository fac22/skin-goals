import React from 'react';
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonModal } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import AddProductForm from '../components/AddProductForm';

import './MyProducts.css';

const MyProducts = ({ user }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [opened, setOpened] = useState('');
  const [pao, setPao] = useState('');
  const [volume, setVolume] = useState('');
  const [price, setPrice] = useState('');

  const [productsData, setProductsData] = useState([]);

  const [creamModal, setCreamModal] = useState({ isOpen: false });
  const [formModal, setFormModal] = useState({ isOpen: false });

  const [creamId, setCreamId] = useState(0);

  // ---------- temp userId
  const uid = user.uid;

  // ------------ reading from realtime database
  useEffect(() => {
    const productsRef = ref(db, 'users/' + uid + '/products/');
    onValue(productsRef, (snapshot) => {
      setProductsData(snapshot.val());
    });
  }, []);

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
          {/* -----------------------------------------------------   RENDERS all product info on page */}
          <div className="grid">
            {productsData.map((cream, index) => {
              return (
                <section className="cream-wrapper">
                  <div
                    key={index}
                    onClick={() => {
                      setCreamId(index);
                      setCreamModal({ isOpen: true });
                    }}
                    className="cream"
                  >
                    {cream.name}
                  </div>
                </section>
              );
            })}
          </div>

          {/* -----------------------------------------------------   MODAL for each cream */}
          <IonModal key={creamId} isOpen={creamModal.isOpen}>
            {/* <h1>This is a modal with ID: {creamId}</h1> */}
            <div className="modal">
              <h3>
                <span className="label-text">Description</span> 📝
              </h3>
              <p>{creamModal.isOpen ? productsData[creamId].description : '-'}</p>
            </div>

            <div className="modal">
              <h3>
                <span className="label-text">Open date</span> 📆
              </h3>
              <p>{creamModal.isOpen ? productsData[creamId].opened : '-'}</p>
            </div>

            <div className="modal">
              <h3>
                <span className="label-text">PAO</span> 🌽
              </h3>
              <p>{creamModal.isOpen ? productsData[creamId].pao : '-'}</p>
            </div>

            <div className="modal">
              <h3>
                <span className="label-text">Price</span> 💷
              </h3>
              <p>{creamModal.isOpen ? productsData[creamId].price : '-'}</p>
            </div>

            <div className="modal">
              <h3>
                <span className="label-text">Volume</span> 🧴
              </h3>
              <p>{creamModal.isOpen ? productsData[creamId].volume : '-'}</p>
            </div>

            <IonButton onClick={() => setCreamModal({ isOpen: false })}>Close Modal</IonButton>
          </IonModal>
        </section>

        {/* -----------------------------------------------------   button opens form modal */}
        <IonButton color="add-btn" expand="block" className="add-btn" onClick={() => setFormModal({ isOpen: true })}>
          Add product <IonIcon icon={addOutline} />
        </IonButton>

        {/* -----------------------------------------------------   FORM MODAL to add a new product*/}
        <IonModal isOpen={formModal.isOpen}>
          <AddProductForm
            name={name}
            description={description}
            setName={setName}
            setDescription={setDescription}
            opened={opened}
            setOpened={setOpened}
            pao={pao}
            setPao={setPao}
            volume={volume}
            setVolume={setVolume}
            price={price}
            setPrice={setPrice}
            formModal={formModal}
            setFormModal={setFormModal}
            uid={uid}
          />
          <IonButton color="danger" onClick={() => setFormModal({ isOpen: false })}>
            Close Modal
          </IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MyProducts;
