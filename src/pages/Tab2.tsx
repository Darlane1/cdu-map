import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem ,IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonButton,  IonCard, IonCardContent } from '@ionic/react';
import { connectFunctionsEmulator } from 'firebase/functions';
import { trashBin } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
//not working// import AppComponents from '../components/AppComponents';
import './Tab2.css';
import React from 'react';
import { collection, where, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import { db } from '../firebase';



//javascript
async function buttonClick(){
  const querySnapshot = await getDocs(collection(db,"unit"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data())
});
} 


//Pages are split into a 12 column grid//
const Tab2: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

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
                      <IonSelect interface= "popover" placeholder = "Colour">
                        <IonSelectOption value = "Red">This is a dumb option</IonSelectOption>
                        <IonSelectOption value = "Yellow">Thi s is another option</IonSelectOption>
                        <IonSelectOption value = "Blue">This is a third option</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonList>
            </IonCol>
            <IonCol size = "5">
                    <IonList>
                    <IonItem>
                      <IonSelect interface= "popover" placeholder = "Course Code">
                        <IonSelectOption value = "IT">This is a test option</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonList>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>

          <IonRow>
          <IonCol></IonCol>
            <IonCol size="10" class="ion-text-center">
              <IonButton onClick={buttonClick}>This is a button</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
      <IonRow id="searchResult" style={{display:"none"}}>
        <IonCol>
          <h1>TEST</h1>
        </IonCol>
      </IonRow>

    </IonGrid>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
