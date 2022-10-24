import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonGrid , IonRow, IonCol, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {getFunctions, httpsCallable} from "firebase/functions";

//testing geolocation from capacitor but so far not working
//import {Geolocation} from '@capacitor/geolocation';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Map</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Map" />
      </IonContent>

    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem>
            There should be a map here
          </IonItem>
        </IonCol>
      </IonRow>
    </IonGrid>

    </IonPage>
  );
};

export default Tab1;
