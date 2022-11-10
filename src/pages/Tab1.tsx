import { IonContent, IonCard,IonHeader, IonPage, IonTitle, IonToolbar, IonItem,IonCardHeader, IonGrid , IonRow, IonCol, IonLabel, IonCardContent,IonButton, IonCardTitle, IonIcon, IonCardSubtitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './Tab2'
import {getFunctions, httpsCallable} from "firebase/functions";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet';
import AppFooter from '../components/AppFooter';
import { useState, useEffect } from 'react';
import { bicycle, car, chevronDown } from 'ionicons/icons';


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
            <IonCol size="12" size-lg="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle class="titlepadding">Charles Darwin University</IonCardTitle>
                  <IonCardSubtitle>Ellengowan Dr, Casuarina NT 0810</IonCardSubtitle>
                  </IonCardHeader>
                    <IonCardContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare massa sed sem dictum finibus. 
                        Nam bibendum egestas sem, nec sagittis odio placerat ut. Nullam consectetur id ex eget facilisis. Lorem ipsum dolor 
                        sit amet, consectetur adipiscing elit. Vivamus ornare massa sed sem dictum finibus. Nam bibendum egestas sem, nec sagittis 
                        odio placerat ut. Nullam consectetur id ex eget facilisis. Aenean non arcu nec metus vulputate egestas et ac dolor. Praesent 
                        ac ante accumsan, porttitor nisl et, tempor metus. Mauris eget augue lacus. Pellentesque accumsan sed lacus vel malesuada. 
                        Aenean aliquam tortor lectus, a auctor augue interdum non. Vivamus nec urna eu lorem luctus bibendum id in odio. Vivamus non 
                        placerat ex. Nulla non fermentum quam.
                    </IonCardContent>  
                    <IonButton fill="clear" shape='round'><IonIcon slot="start" icon={car}></IonIcon>16 mins</IonButton>
                    <IonButton shape='round'><IonIcon slot="start" icon={bicycle}></IonIcon>48 mins</IonButton>
                    <IonItem button lines="none">
                      <IonLabel>View More</IonLabel>
                      <IonIcon slot="start" size="medium" icon={chevronDown}></IonIcon>
                    </IonItem>
              </IonCard>
            </IonCol>
            <IonCol>
              <map id='leaflet-container'>               
               <MapContainer center={[-12.3717852, 130.8689199]} zoom={18} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"                   
                  />
              <Marker position={[-12.371666, 130.868028]}>
                <Popup>
                Hit 372 Organisation Network Infrastructure  <br />  3rd floor room .17
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