import { IonContent, IonCard,IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonGrid , IonRow, IonCol, IonLabel, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './Tab2'
import {getFunctions, httpsCallable} from "firebase/functions";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet';
import AppFooter from '../components/AppFooter';
import { useState, useEffect } from 'react';


export default function Tab1() {
  /*
const geocode = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates:
    { latitude: "",
    longitude: "" }
  });

  useEffect(() => {
    if( !("geolocation") in navigator) ){
      setLocation(state => {
        ...state
        loaded: true
        error: {
          code: 0,
          message: "Geolocation got rekt"
        }
      }))
    }
  }, [])
  
  return location;}))

}
*/


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
        <IonGrid class="padding">
          <IonRow>
            <IonCol size="4">
              <IonCard>
                <IonHeader>
                  <IonTitle>This is a Title</IonTitle>
                    <IonCardContent>This is a bunch of something</IonCardContent>
                </IonHeader>
                </IonCard>
                </IonCol>
            <IonCol >
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
        </IonGrid>
        <AppFooter/>
      </IonContent>
    </IonPage>
  );
};