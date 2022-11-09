import './Tab2.css';
import { IonContent, IonHeader, IonPage, IonIcon, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem ,IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonButton,  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel } from '@ionic/react';
import { trashBin, options, refresh } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import AppFooter from '../components/AppFooter';
import  { Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import {Link} from "react-router-dom";

//Here for testing pruposes and send data to console
async function buttonClick(){
  const querySnapshot = await getDocs(collection(db,"unit"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data())
});
} 


export default function Tab2() {
const [units, setUnits] = useState<any>([]);
const [filter, setFilter] = useState(false);
const onShow = () => setFilter(true);


function doRefresh(){
  window.location.reload()
}



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
        <IonGrid class="padding">
          <IonRow>
            <IonCol offset="1" size="9">
              <IonSearchbar  showClearButton='always' clear-icon={trashBin}></IonSearchbar>
              <p></p>
            </IonCol>
            <IonCol size="0.5">
                <IonItem  button onClick={onShow} lines="none">
                  <IonIcon size="large" icon={options}></IonIcon>
                </IonItem>
               </IonCol>
               <IonCol size="0.5">
                <IonItem button onClick={doRefresh} lines="none">
                 <IonIcon size="large" icon={refresh}></IonIcon>
                </IonItem>
               </IonCol>
          </IonRow>
 
    {filter ? 
        <IonRow >
            <IonCol offset='1' size='5'>
                    <IonList>
                    <IonItem>
                      <IonSelect id="unit" interface= "popover" placeholder = "Unit">
                        {units.map((unit: {
                          id: Key; 
                          name: string;
                          unitcode:string;
                        }) => (  
                        <IonSelectOption key={unit.id} value = "1">{unit.unitcode} {unit.name}</IonSelectOption>  
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
       : null }
      {filter ? 
          <IonRow>
            <IonCol offset="1" size="10" class="ion-text-center">
              <IonButton onClick={buttonClick}>Search</IonButton>
            </IonCol>
          </IonRow>
      : null}

{/*size = when the screen is below 576px, it will take up 12 columns. size-sm = size of coloumns it will take up when screen is more than 576px.
 * A little broken though cause when the screen is below 576px, the offset is still there so the first row isn't aligned. */}
<IonRow id="searchResult">
  {/** 
  <IonCol id="trash" size="1"></IonCol>
  */}
  {units.map((unit: {
            id: Key; 
            name:string;
            lecturer: string;
            bcolor: string;
            unitcode: string;
            }) =>  (
                    <IonCol size="12" size-lg='4'>
                      <IonCard>
                        <IonCardHeader>
                        <IonCardTitle class="ion-text-capitalize">{unit.unitcode} {unit.name}</IonCardTitle>
                          <IonCardContent class="ion-text-capitalize">
                          Room: {unit.bcolor} <br/> 
                          Lecturer: {unit.lecturer} <br/>
                          Description: Example
                        </IonCardContent>
                        <Link to={{
                          pathname: "/tab1",}}>
                            <IonButton href="">locate</IonButton>
                        </Link>
                      
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