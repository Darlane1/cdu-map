import './AppFooter.css';
import { IonContent, IonCard,IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonGrid , IonRow, IonCol, IonLabel, IonCardContent } from '@ionic/react';
import ExploreContainer from './ExploreContainer';

const AppFooter: React.FC = () => {
  return (
    <IonGrid class="appfooter">
      <IonRow>
        <IonCol offset-lg="2">
          <IonLabel>
          © 2022 Charles Darwin University
          </IonLabel>
        </IonCol>
        <IonCol offset-lg='2' class="ion-text-wrap">
          <IonLabel>
          HIT401 Capstone Project - Team 2
          </IonLabel>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol offset-lg="2">
          <IonLabel>
            <p>This is a little bit more information</p>
          </IonLabel>
        </IonCol>
      <IonCol offset-lg='2'>
        <IonLabel>
            <p>Darlane Tang, James Munson, {'ʚ♡ɞ'} Neil {'ʚ♡ɞ'}, Rakib</p>
        </IonLabel>
        </IonCol>
      </IonRow>
      </IonGrid>

  );
};


export default AppFooter;
