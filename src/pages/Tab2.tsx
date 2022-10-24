import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem ,IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonButton,  IonCard, IonCardContent } from '@ionic/react';
import { connectFunctionsEmulator } from 'firebase/functions';
import { trashBin } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';



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
                    <IonSelectOption value = "Red">This is a test option</IonSelectOption>
                    <IonSelectOption value = "Yellow">This is another option</IonSelectOption>
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
          <IonButton >This is a button</IonButton>
        </IonCol>
        <IonCol></IonCol>
      </IonRow>

      <IonRow id="cards">
        <IonCol>
          <h1>TEST</h1>
        </IonCol>
      </IonRow>

    </IonGrid>




        <ExploreContainer name="Search" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
