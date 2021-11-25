import React from 'react';
import { useState, useEffect } from 'react';
import { ref, onValue, remove, set, update } from 'firebase/database';
import { db } from '../firebase';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonModal,
  IonText,
} from '@ionic/react';
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

  // const [productsData, setProductsData] = useState({});
  const [productsArray, setProductsArray] = useState([]);

  const [creamModal, setCreamModal] = useState({ isOpen: false });
  const [formModal, setFormModal] = useState({ isOpen: false });

  const [creamId, setCreamId] = useState(0);

  // ---------- temp userId
  const uid = user.uid;

  // ---------------------------- delete product
  const deleteProduct = (key) => {
    // db.database().ref(`users/${uid}/products/${key}`).remove();
    // console.log('product key is', typeof key);
    console.log('product key is', key);

    const nodeToDelete = ref(db, `users/${uid}/products/${key}`);
    remove(nodeToDelete);

    // set(ref(db, `users/${uid}/products/${key}`), null);
  };

  // ------------ reading from realtime database
  useEffect(() => {
    const productsRef = ref(db, 'users/' + uid + '/products/');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setProductsArray(Object.values(data));
      } else {
        setProductsArray([]);
      }
    });

    console.log('productsArray', productsArray);
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
            {productsArray.map((cream, index) => {
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
          <IonModal className="product-modal" key={creamId} isOpen={creamModal.isOpen}>
            <section className="modal-open">
              <IonHeader>
                <IonToolbar>
                  <IonTitle>product name</IonTitle>
                  <IonButtons slot="end">
                    <IonButton color="danger" onClick={() => setCreamModal({ isOpen: false })}>
                      Close
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <div className="product-details-container">
                <div className="modal">
                  <h3>
                    <span className="label-text">Description</span> 📝
                  </h3>
                  <p>{creamModal?.isOpen ? productsArray[creamId].description : '-'}</p>
                </div>

                <div className="modal">
                  <h3>
                    <span className="label-text">Open date</span> 📆
                  </h3>
                  <p>{creamModal?.isOpen ? productsArray[creamId].opened : '-'}</p>
                </div>

                <div className="modal">
                  <h3>
                    <span className="label-text">PAO</span> 🌽
                  </h3>
                  <p>{creamModal?.isOpen ? productsArray[creamId].pao : '-'}</p>
                </div>

                <div className="modal">
                  <h3>
                    <span className="label-text">Price</span> 💷
                  </h3>
                  <p>{creamModal?.isOpen ? productsArray[creamId].price : '-'}</p>
                </div>

                <div className="modal">
                  <h3>
                    <span className="label-text">Volume</span> 🧴
                  </h3>
                  <p>{creamModal?.isOpen ? productsArray[creamId].volume : '-'}</p>
                </div>
              </div>
            </section>

            <section className="modal-buttons">
              <IonButton
                onClick={async () => {
                  await setCreamModal({ isOpen: false });
                  deleteProduct(productsArray[creamId].id);
                }}
              >
                Delete Product
              </IonButton>
            </section>
          </IonModal>
        </section>

        {/* -----------------------------------------------------   button opens form modal */}
        <IonButton
          data-testid="addButton"
          color="add-btn"
          expand="block"
          className="add-btn"
          onClick={() => setFormModal({ isOpen: true })}
        >
          Add product <IonIcon icon={addOutline} />
        </IonButton>

        {/* -----------------------------------------------------   FORM MODAL to add a new product*/}
        <IonModal data-testid="formModal" isOpen={formModal.isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Add new product</IonTitle>
              <IonButtons slot="end">
                <IonButton color="danger" onClick={() => setFormModal({ isOpen: false })}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
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
            productsArray={productsArray}
          />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MyProducts;
