import './AppFooter.css';
import { IonContent, IonCard,IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonGrid , IonRow, IonCol, IonLabel, IonCardContent } from '@ionic/react';
import ExploreContainer from './ExploreContainer';

const AppFooter: React.FC = () => {
  return (
    <IonGrid class="appfooter">
      <IonRow>
        <IonCol offset='2'>
        <IonLabel>
            HIT401 PROJECT MANAGEMENT
        </IonLabel>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol offset="2">
          <IonLabel>
          @2022 Application done by Darlane Tang, James Munson, Neil, Rakib.
          </IonLabel>
        </IonCol>
        <IonCol offset='2' class="ion-text-wrap">
          <IonLabel>
            Charles Darwin University
          </IonLabel>
        </IonCol>
      </IonRow>
      </IonGrid>

  );
};


export default AppFooter;
