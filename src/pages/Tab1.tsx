import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonGrid , IonRow, IonCol, IonLabel, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {getFunctions, httpsCallable} from "firebase/functions";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MyMap from '../components/googlemaps';


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
            <IonCol>
              <map id='leaflet-container'>
               <MapContainer center={[-12.3717852, 130.8689199]} zoom={18} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
              <Marker position={[-12.3715952, 130.8689199]}>
                <Popup>
                  CDU  <br /> this is a marker
                </Popup>
              </Marker>
            </MapContainer>
            </map>
          </IonCol>
          </IonRow>
            <IonItem>
              {/**Google maps capacitor. might just delete */}
              <capacitor-google-map id="map"></capacitor-google-map>
                <MyMap></MyMap>
              <IonLabel>There is a google map here</IonLabel>
            </IonItem>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
