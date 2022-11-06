import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem ,IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonButton,  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel } from '@ionic/react';
import { connectFunctionsEmulator } from 'firebase/functions';
import { trashBin } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import AppComponents from '../components/AppComponents';
import './Tab2.css';
import  { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { collection, where, doc, getDoc, getDocs, query, setDoc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';



async function buttonClick(){
  const querySnapshot = await getDocs(collection(db,"unit"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data())
});
} 


//Pages are split into a 12 column grid//
export default function Tab2() {
const [units, setUnits] = useState<any>([]);

//console.log(units)
  useEffect(
    () =>
    onSnapshot(collection(db,"unit"), (snapshot) => 
      setUnits(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      //setUnits(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ),
  []
);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {/**Really not sure what the below does? */}
        <IonHeader collapse="condense">
        </IonHeader>

        <ExploreContainer name="Search" />
    
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size="10">
              <IonSearchbar showClearButton='always' clear-icon={trashBin}></IonSearchbar>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>

          <IonRow>
            <IonCol></IonCol>
            <IonCol size = "5">
                    <IonList>
                    <IonItem>
                      {/*Should work with firebase data and do a foreach loop and https://ionicframework.com/docs/api/select*/}
                      <IonSelect id="unit" interface= "popover" placeholder = "Unit">

                        {units.map((unit: {
                          id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                        }) =>
                        
                        (
                          
                        <IonSelectOption key={unit.id} value = "1">{unit.name}</IonSelectOption>
                          
                        ))}


                      </IonSelect>
                    </IonItem>
                  </IonList>
            </IonCol>
            <IonCol size = "5">
                    <IonList>
                    <IonItem>
                      {/*Should work with firebase data and do a foreach loop */}
                      <IonSelect id="lecturer" interface= "popover" placeholder = "Lecturer">


                      {units.map((unit: {
                          id: Key | null | undefined; lecturer: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                        }) =>
                        
                        (
                          
                        <IonSelectOption key={unit.id} value = "1">{unit.lecturer}</IonSelectOption>
                          
                        ))}



                      </IonSelect>
                    </IonItem>
                  </IonList>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>

          <IonRow>
          <IonCol></IonCol>
            <IonCol size="10" class="ion-text-center">
              <IonButton onClick={buttonClick}>This is a gosh darn button.</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>

{/*Temporary trying to get onclick event to work */}
      <IonRow id="searchResult" style={{display:"none"}}>
        <IonCol>
          <h1>TEST</h1>
        </IonCol>
      </IonRow>
{/*Placeholder. Should be a foreach loop from firebase and work with the results from filter or search bar */}
<IonRow>
  <IonCol></IonCol>
  <IonCol size="3.5">
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>This is a title</IonCardTitle>
        <IonCardContent>
          
          <IonList>
            <IonItem>

              

                <IonList>
                  fuck 
                  eggs &
                  ham
                </IonList>
                  



              

            </IonItem>

      </IonList>
        

        </IonCardContent>
        <IonCardSubtitle>This is the card subtitle</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
    </IonCol>
    <IonCol size="3.5">
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>This is a title</IonCardTitle>
        <IonCardContent>This is the card content</IonCardContent>
        <IonCardSubtitle>This is the card subtitle</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
    </IonCol>
    <IonCol size="3.5">
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>This is a title</IonCardTitle>
        <IonCardContent>This is the card content</IonCardContent>
        <IonCardSubtitle>This is the card subtitle</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
    </IonCol>
    <IonCol></IonCol>
    </IonRow>

    </IonGrid>
    


      </IonContent>
    </IonPage>
  );
};