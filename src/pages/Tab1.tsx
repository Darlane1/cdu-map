import { IonContent, IonCard,IonHeader, IonPage, IonTitle, IonToolbar, IonItem,IonCardHeader, IonGrid , IonRow, IonCol, IonLabel, IonCardContent,IonButton, IonCardTitle, IonIcon, IonCardSubtitle, IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './Tab2'
import {  MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent, useMapEvents } from 'react-leaflet';
import 'leaflet';
import AppFooter from '../components/AppFooter';
import { useState, useEffect, Key } from 'react';
import { bicycle, car, chevronDown, chevronUp, options } from 'ionicons/icons';
import useSwr from "swr";
import L, { icon, marker } from 'leaflet';
import { onSnapshot, collection, GeoPoint } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';



export default function Tab1() {
  
    const [ units, setUnits ] = useState<any>([]);
    
    //Main DB retrieval React Hook, auto retrieves everything at the moment.
      useEffect(
        () =>
        onSnapshot(collection(db,"unit"), (snapshot) => 
          setUnits(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        ),
      []
    );
  
  
  

const position = [
  [-51.505, -0.09]
]

var myIcon = L.icon({
  iconUrl: require("../assets/images/mapman.png"),
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

var myIcon1 = L.icon({
  iconUrl: require("../assets/images/leaf-orange.png"),
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

var myIcon2 = L.icon({
  iconUrl: require("../assets/images/leaf-green.png"),
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});




function MapInteractivity() {
  const map = useMapEvent('click', () => {
    map.setZoom(19);
    map.setView([-12.3717852, 130.8689199]);
    L.marker([-12.3717852, 130.8689199], {icon: myIcon}).bindTooltip("got ya").openTooltip().addTo(map);
    L.marker([-12.372838, 130.868606], {icon: myIcon1}).bindTooltip("HIT333 - Purple 6").openTooltip().addTo(map);
    L.marker([-12.371682093847472, 130.86567742124967], {icon: myIcon2}).bindTooltip("HIT401 - Pink 3").openTooltip().addTo(map);

  })

  return null
}

function MyMapComponent() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MapInteractivity/>
    </MapContainer>
  )
}

//part of what's needed to bring in db.
{units.map((unit: {
  id: Key; 
  name:string;
  lecturer: string;
  bcolor: string;
  unitcode: string;
  geoloca: GeoPoint;
  descr: string;
  test1: string;
  }) =>  ([])
  
  )}

//const expandView = () => setViewmore(true);
const [Viewmore, setViewmore] = useState(false);
const [Toggleview, setToggleview] = useState(true)

function toggleviewOn(){
  setViewmore(true);
  setToggleview(false);
};

function toggleviewOff(){
  setViewmore(false);
  setToggleview(true);
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill='clear'>
            <IonBackButton/>
          </IonButton>
          <IonTitle class="ion-text-center">Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>+
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
                        sit amet, consectetur adipiscing elit. Vivamus ornare massa sed sem dictum finibus.
                    </IonCardContent>  
                    <IonButton fill="clear" shape='round'><IonIcon slot="start" icon={car}></IonIcon>16 mins</IonButton>
                    <IonButton shape='round'><IonIcon slot="start" icon={bicycle}></IonIcon>48 mins</IonButton>

                    {Viewmore ?
                    <IonCardContent>
                      <IonLabel>Suspendisse fermentum interdum ultrices. Aenean commodo, sem vel tempus imperdiet, nunc dolor finibus elit, at 
                        iaculis lectus elit quis magna. Suspendisse lacus mauris, lobortis sed augue fermentum, dignissim pretium lacus. 
                        Phasellus eu dolor fringilla, ornare est suscipit, tempor ligula. Integer fermentum, mi a bibendum pharetra, turpis 
                        felis sodales sem, sed pulvinar augue nunc et sem. Sed quis porta metus, in condimentum ex.</IonLabel>
                    </IonCardContent>                   
                  :null}

                  {Toggleview ? 
                    <IonItem button lines="none" onClick={toggleviewOn}>
                      <IonLabel>View More</IonLabel>
                      <IonIcon slot="start" size="medium" icon={chevronDown}></IonIcon>
                    </IonItem>
                  :
                  <IonItem button lines="none" onClick={toggleviewOff}>
                  <IonLabel>View Less</IonLabel>
                  <IonIcon slot="start" size="medium" icon={chevronUp}></IonIcon>
                </IonItem>
                  }

              </IonCard>
            </IonCol>
            <IonCol>
              <map id='leaflet-container'>               
               <MapContainer center={[41.89016626073382, 12.492327291197707]} zoom={19} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"                  
                  />
              <Marker position={[41.89016626073382, 12.492327291197707]}>
                       <MapInteractivity/>
                <Popup>
                HIT372 Organisation Network Infrastructure  <br />  3rd floor room .17
                </Popup>
              </Marker>
            </MapContainer>
            </map>
          </IonCol>
          </IonRow>

          <IonRow id="cuit">

  {units.map((unit: {
            id: Key; 
            test1: string;
            }) =>  (

            <IonCol>
              {unit.test1}
            </IonCol>
            ))}
          </IonRow>

        </IonGrid>
        <AppFooter/>
      </IonContent>
    </IonPage>
  );

  
};