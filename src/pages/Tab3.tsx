import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetime, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Timetable</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Timetable"></ExploreContainer>

        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size='10'>
              
                <IonDatetime></IonDatetime>
                
                </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
    

    </IonPage>
  );
};

export default Tab3;
