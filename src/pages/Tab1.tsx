import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonGrid , IonRow, IonCol, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {getFunctions, httpsCallable} from "firebase/functions";

import { MapContainer, TileLayer, useMap } from 'react-leaflet'




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
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size='10'>
              <IonItem>
                There should be a map here
                
              </IonItem>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
          <IonRow>
            <IonCol class={"ion-text-center"}>Placeholder</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
