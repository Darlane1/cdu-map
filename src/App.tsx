import { useState, useEffect } from "react";
/* import "./App.css"; */
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";


import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonSearchbar,
  IonTabs,
  setupIonicReact

} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, map, search} from 'ionicons/icons';


import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import 'leaflet/dist/leaflet.css';

/*Firebase*/
import  {initializeApp}  from 'firebase/app';

/*https://www.youtube.com/watch?v=-RtrbNJxOfQ&ab_channel=DanielHampikian*/
const FirebaseConfig = {
  apiKey: "AIzaSyC-5UY81CFD6qvKMlZGO02sIVpvfvXOv-c",
  authDomain: "cdumap.firebaseapp.com",
  projectId: "cdumap",
  storageBucket: "cdumap.appspot.com",
  messagingSenderId: "174709894113",
  appId: "1:174709894113:web:e31896f80f0a6e3c7180a0",
  measurementId: "G-F4G0HG9H7N"
};

const cdubase = initializeApp(FirebaseConfig);


setupIonicReact();

const App: React.FC = () => (
  
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={calendar} />
            <IonLabel>TimeTable</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
