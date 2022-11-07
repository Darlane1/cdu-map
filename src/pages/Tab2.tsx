import './Tab2.css';
import { IonContent, IonHeader, IonPage, IonIcon, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem ,IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonButton,  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel } from '@ionic/react';
import { options} from 'ionicons/icons';
import { trashBin } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import  { Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { collection, where, doc, getDoc, getDocs, query, setDoc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';

async function buttonClick(){
  const querySnapshot = await getDocs(collection(db,"unit"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data())
});
} 


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

//Pages are split into a 12 column grid//
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
            <IonCol offset="1" size="9">
              <IonSearchbar  showClearButton='always' clear-icon={trashBin}></IonSearchbar>
            </IonCol>
            <IonCol size="1">
              <IonItem href="/">
               <IonIcon size="large" icon={options}></IonIcon>
              </IonItem>
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
            <IonCol offset="1" size="10" class="ion-text-center">
              <IonButton onClick={buttonClick}>Search</IonButton>
            </IonCol>
          </IonRow>

{/*size = when the screen is below 576px, it will take up 12 columns. size-sm = size of coloumns it will take up when screen is more than 576px.
 * A little broken though cause when the screen is below 576px, the offset is still there so the first row isn't aligned. */}
<IonRow id="searchResult">
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
                      <IonButton href="">locate</IonButton>
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