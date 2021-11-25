import { IonItem, IonLabel, IonIcon } from '@ionic/react';
import { Draggable } from 'react-beautiful-dnd';
import { reorderThreeOutline } from 'ionicons/icons';
import './ProductListItem.css';

const ProductListItem = ({ product, index }) => {
  return (
    <Draggable draggableId={product.id} index={index}>
      {(provided) => (
        <IonItem className="productListItem" {...provided.draggableProps} ref={provided.innerRef}>
          <IonLabel>{product.name}</IonLabel>
          <IonIcon icon={reorderThreeOutline} color="add-btn" {...provided.dragHandleProps} />
        </IonItem>
      )}
    </Draggable>
  );
};

export default ProductListItem;
