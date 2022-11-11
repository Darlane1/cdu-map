import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetime, IonGrid, IonRow, IonCol, IonItem,IonButton,IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React,{ Component, useMemo} from "react";
import AppFooter from '../components/AppFooter';


const Tab3: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill='clear'>
            <IonBackButton/>
          </IonButton>
          <IonTitle class="ion-text-center">Timetable</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Timetable"/>

        <IonGrid class="padding fullpage">
          <IonRow>
            <IonCol></IonCol>
            <IonCol class="ion-align-self-center">
                <IonDatetime></IonDatetime>
                </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        
        <AppFooter/>
      </IonContent>
    

    </IonPage>
  );
};

export default Tab3;
