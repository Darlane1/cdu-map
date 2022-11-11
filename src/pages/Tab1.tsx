import { IonContent, IonCard,IonHeader, IonPage, IonTitle, IonToolbar, IonItem,IonCardHeader, IonGrid , IonRow, IonCol, IonLabel, IonCardContent,IonButton, IonCardTitle, IonIcon, IonCardSubtitle } from '@ionic/react';
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
  iconUrl: 'https://ih1.redbubble.net/image.578654116.9300/raf,128x128,075,t,8DB3D2:e6f0370482.u8.jpg',
  iconSize: [38, 38],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});




function MapInteractivity() {
  const map = useMapEvent('click', () => {
    map.setZoom(19);
    map.setView([-12.3717852, 130.8689199]);
    L.marker([-12.3737852, 130.8689199], {icon: myIcon}).addTo(map);
    L.marker([-12.3747852, 130.8689199], {icon: myIcon}).bindTooltip("blap ya").openTooltip().addTo(map);
    L.marker([-12.3747852, 130.8789199], {icon: myIcon}).addTo(map);
    
  })

  return null
}

function MyMapComponent() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MapInteractivity />
    </MapContainer>
  )
}

//part of what's needed to bring in co
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
                        sit amet, consectetur adipiscing elit. Vivamus ornare massa sed sem dictum finibus. Nam bibendum egestas sem, nec sagittis 
                        odio placerat ut. Nullam consectetur id ex eget facilisis. Aenean non arcu nec metus vulputate egestas et ac dolor. Praesent 
                        ac ante accumsan, porttitor nisl et, tempor metus. Mauris eget augue lacus. Pellentesque accumsan sed lacus vel malesuada. 
                        Aenean aliquam tortor lectus, a auctor augue interdum non. Vivamus nec urna eu lorem luctus bibendum id in odio. Vivamus non 
                        placerat ex. Nulla non fermentum quam.
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

          <IonRow id="cuint">

  {units.map((unit: {
            id: Key; 
            name:string;
            lecturer: string;
            bcolor: string;
            unitcode: string;
            geoloca: GeoPoint;
            descr: string;
            test1: string;
            }) =>  (
                    <IonCol>
                      
                      <IonCard>
                        <IonCardHeader>
                        <IonCardTitle class="ion-text-fuckyou">{unit.test1} {unit.name}</IonCardTitle>
                          <IonCardContent class="ion-text-fuckyou">
                          {unit.test1} <br/> 

                        </IonCardContent>

                      
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>

        </IonGrid>
        <AppFooter/>
      </IonContent>
    </IonPage>
  );

  
};