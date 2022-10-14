import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem ,IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import { trashBin } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonSearchbar showClearButton='always' clear-icon={trashBin}></IonSearchbar>

    <IonGrid>
      <IonRow>
        <IonCol>
                <IonList>
                <IonItem>
                  <IonSelect interface= "popover" placeholder = "Select Test">
                    <IonSelectOption value = "testoption">This is a test option holder</IonSelectOption>
                    <IonSelectOption value = "testoption">This is another option holder</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
        </IonCol>
        <IonCol>
                <IonList>
                <IonItem>
                  <IonSelect interface= "popover" placeholder = "Select Test 2">
                    <IonSelectOption value = "testoption">This is a test option</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
        </IonCol>
      </IonRow>
    </IonGrid>




        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Search" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
