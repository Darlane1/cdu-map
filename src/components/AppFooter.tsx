import './AppFooter.css';
import { IonContent, IonCard,IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonGrid , IonRow, IonCol, IonLabel, IonCardContent } from '@ionic/react';
import ExploreContainer from './ExploreContainer';

const AppFooter: React.FC = () => {
  return (
    <IonGrid class="appfooter">
      <IonRow>
        <IonCol offset='2'>
        <IonLabel>
            
        </IonLabel>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol offset="2">
          <IonLabel>
          © 2022 Charles Darwin University
          </IonLabel>
        </IonCol>
        <IonCol offset='2' class="ion-text-wrap">
          <IonLabel>
          HIT401 Capstone Project - Team 2
          </IonLabel>
        </IonCol>
      </IonRow>
      </IonGrid>

  );
};


export default AppFooter;
