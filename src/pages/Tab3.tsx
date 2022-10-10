import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { trashBin } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TimeTable</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <ExploreContainer name="Timetable" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
