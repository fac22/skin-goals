import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import {
  IonIcon,
  IonFab,
  IonFabButton,
  IonFabList,
  useIonPopover,
  IonListHeader,
  IonList,
  IonItem,
} from '@ionic/react';
import { person, logOut, chatbubbleEllipses, settings, shareSocial } from 'ionicons/icons';

const PopoverList = ({ onHide }) => (
  <IonList>
    <IonListHeader>
      <h1>Coming Soon...</h1>
    </IonListHeader>
    <IonItem>We are working hard</IonItem>
    <IonItem color="danger" detail={false} button onClick={onHide}>
      Close
    </IonItem>
  </IonList>
);

const ProfilePopover = () => {
  const logout = async () => {
    await signOut(auth);
  };

  const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss() });
  return (
    <IonFab vertical="top" horizontal="end" edge slot="fixed">
      <IonFabButton>
        <IonIcon icon={person} />
      </IonFabButton>
      <IonFabList side="start">
        <IonFabButton onClick={logout}>
          <IonIcon icon={logOut} />
        </IonFabButton>

        <IonFabButton
          expand="block"
          onClick={(e) =>
            present({
              event: e.nativeEvent,
            })
          }
        >
          <IonIcon icon={settings} />
        </IonFabButton>

        <IonFabButton
          expand="block"
          onClick={(e) =>
            present({
              event: e.nativeEvent,
            })
          }
        >
          <IonIcon icon={chatbubbleEllipses} />
        </IonFabButton>

        <IonFabButton
          expand="block"
          onClick={(e) =>
            present({
              event: e.nativeEvent,
            })
          }
        >
          <IonIcon icon={shareSocial} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default ProfilePopover;
