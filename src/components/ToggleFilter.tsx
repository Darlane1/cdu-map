//FOR LEARNING PURPOSES


import React,{useState} from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem ,IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonButton,  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel } from '@ionic/react';

const Filtertoggle = () => {
    const [Showfilter, setShowfilter] = useState(false);
    const ToggleOff = () => setShowfilter(false);
    const ToggleOn = () => setShowfilter(true);
    return(
        <div>
        {Showfilter ? <button onClick={ToggleOff}>Hi</button>:<button onClick={ToggleOn}>Bye</button>}
        </div>
    )
}

export default Filtertoggle;