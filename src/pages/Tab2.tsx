import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem ,IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonButton,  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel } from '@ionic/react';
import { connectFunctionsEmulator } from 'firebase/functions';
import { trashBin } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import AppComponents from '../components/AppComponents';
import './Tab2.css';
import  { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { collection, where, doc, getDoc, getDocs, query, setDoc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { getDatabase } from "firebase/database";

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
            <IonCol offset="1" size="10">
              <IonSearchbar  showClearButton='always' clear-icon={trashBin}></IonSearchbar>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol offset='1' size='5'>
                    <IonList>
                    <IonItem>
                      <IonSelect id="unit" interface= "popover" placeholder = "Unit">
                        {units.map((unit: {
                          id: Key; 
                          name: string;
                        }) => (  
                        <IonSelectOption key={unit.id} value = "1">{unit.name}</IonSelectOption>  
                        ))}
                      </IonSelect>
                    </IonItem>
                  </IonList>
            </IonCol>
            <IonCol size = "5">
                    <IonList>
                    <IonItem>
                      <IonSelect id="lecturer" interface= "popover" placeholder = "Lecturer">
                      {units.map((unit: {
                          id: Key; 
                          lecturer: string;
                        }) =>  (
                        <IonSelectOption key={unit.id} value = "1">{unit.lecturer}</IonSelectOption>
                        ))}

                      </IonSelect>
                    </IonItem>
                  </IonList>
            </IonCol>
          </IonRow>
          <p id='getResults'></p>

          <IonRow>
          <IonCol></IonCol>
            <IonCol size="10" class="ion-text-center">
              <IonButton onClick={buttonClick}>Search</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>

{/*Placeholder. Should be a foreach loop from firebase and work with the results from filter or search bar */}
<IonRow id="searchResult">
{/*size = when the screen is below 576px, it will take up 12 columns. size-sm = size of coloumns it will take up when screen is more than 576px.
 * A little broken though cause when the screen is below 576px, the offset is still there so the first row isn't aligned. */}
<IonCol id="trash" size="1"></IonCol>

{units.map((unit: {
           id: Key; 
           name:string;
           lecturer: string;
           }) =>  (
                  <IonCol size="12" size-lg='3.3'>
                    <IonCard>
                      <IonCardHeader>
                       <IonCardTitle>This is {unit.name}</IonCardTitle>
                        <IonCardContent>
                         Room:  <br/> 
                         Lecturer: {unit.lecturer} <br/>
                         Description: Example
                       </IonCardContent>
                    <IonButton>This is a button</IonButton>
                 </IonCardHeader>
               </IonCard>
             </IonCol>
           ))}

</IonRow>
    </IonGrid>
      </IonContent>
    </IonPage>
  );
};