import { IonItem, IonLabel, IonIcon } from '@ionic/react';
import { Draggable } from 'react-beautiful-dnd';
import { reorderThreeOutline } from 'ionicons/icons';

const ProductListItem = ({ product, index }) => {
  return (
    <Draggable draggableId={product.id} index={index}>
      {(provided) => (
        <IonItem {...provided.draggableProps} ref={provided.innerRef}>
          <IonLabel>{product.name}</IonLabel>
          <IonIcon icon={reorderThreeOutline} {...provided.dragHandleProps} />
        </IonItem>
      )}
    </Draggable>
  );
};

export default ProductListItem;
