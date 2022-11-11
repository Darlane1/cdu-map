import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetime, IonGrid, IonRow, IonCol, IonItem,IonButton,IonBackButton, IonSearchbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonList, IonLabel, IonImg, IonSegment, IonSegmentButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React,{ Component, useMemo, useState} from "react";
import AppFooter from '../components/AppFooter';
import { chevronBack, chevronForward } from 'ionicons/icons';
import img1 from './images/cdu-timetable.png';

export default function Tab3() {
  const [Showtimetable, setShowtimetable] = useState(false);
  const [Toggletime, setToggletime] = useState(true);

  function ToggletimetableOn(){
    setShowtimetable(true)
    setToggletime(false)
  }

  function ToggletimetableOff(){
    setShowtimetable(false)
    setToggletime(true)
  }

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

        <IonGrid class="padding">
          <IonRow>
            <IonCol offset="1" size="3"class="ion-align-self-center">
              <IonCard>
                <IonDatetime></IonDatetime>
              </IonCard>               
              </IonCol>
              <IonCol size="2">
                <IonSegment value="default">
                  <IonSegmentButton value='Day'>
                    <IonLabel>Day</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value='Week'>
                    <IonLabel>Week</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value='Month'>
                    <IonLabel>Month</IonLabel>
                  </IonSegmentButton>
                </IonSegment>

              </IonCol>
              <IonCol offset="1"size="4">
                <IonItem>
                  <IonLabel>Current Day</IonLabel>
                  <IonIcon icon={chevronBack}></IonIcon>
                  <IonIcon icon={chevronForward}></IonIcon>
                </IonItem>
              </IonCol>
          </IonRow>
          <IonRow>
            <IonCol offset="1" size="3" >
              <IonCard className='extracontent'>
                <IonCardHeader>
                  <IonCardTitle>
                    Calendar
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                      <IonLabel>This is something</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>This is something</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>This is something</IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="7">
              <IonContent>
                <IonItem>
                  <IonLabel>
                    This is something
                  </IonLabel>
                </IonItem>
              </IonContent>
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol offset="1" size="10">

              {Toggletime ? 
              <IonItem button onClick={ToggletimetableOn}>
                Click here to show full Charles Darwin University timetable
              </IonItem>
              :
              <IonItem button onClick={ToggletimetableOff}>
              Click here to show full Charles Darwin University timetable
            </IonItem>
              
              }

              {Showtimetable ? 
              <IonItem lines='none'>
                <IonImg src={require("../assets/images/cdu-timetable.png")} placeholder='There should be something here'></IonImg>
              </IonItem>
              : null}
            
              

            </IonCol>
          </IonRow>
        </IonGrid>
        
        <AppFooter/>
      </IonContent>
    

    </IonPage>
  );
};

