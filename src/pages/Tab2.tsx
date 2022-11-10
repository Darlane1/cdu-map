import './Tab1.tsx';
import './Tab2.css';
import { IonContent, IonHeader, IonPage, IonIcon, IonSearchbar, IonTitle, IonToolbar, IonList, IonItem ,IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonButton,  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel } from '@ionic/react';
import { trashBin, options, refresh } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import AppFooter from '../components/AppFooter';
import  { Key, useEffect, useState } from 'react';
import { collection, GeoPoint, getDocs, onSnapshot, where } from "firebase/firestore";
import { db } from '../firebase';


//Here for testing pruposes and send data to console
async function checkCollection(){
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

//Main DB retrieval React Hook.
//console.log(units)
  useEffect(
    () =>
    onSnapshot(collection(db,"unit"), (snapshot) => 
      setUnits(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ),
  []
);



/*

const Search = () => {
  const [query, setQuery ] = useState({})
  const handleKey = (e: { code: string; })=>{
    e.code === "Enter" && handleSearch();
  }}


const Search = () => {
  const [data, setData] = useState({});

  const useQuery = () => {
    return new URLSearchParams(useLocation(.search);
  
  };
let query = useQuery();
let search = query.get("name");
console.log("search", search);

useEffect(() => {
  searchData = () => {
    db
    .child("unit")
    .orderByChild("unitcode")
    .equalTo(search)
    .on("value",(snapshot) => {
      if (snapshot.val()) {
        const data = snapshot.val();
        setData(data);
      }
    });
  }
}

  )}

}
*/

//1. This doesn't work but it's crash-free at the moment and is the start of a Search function.
//REALTIME GET FUNCTGION
const [query, setQuery] = useState<any>("");
console.log(query);

const handleSearch = (e: any) => {};

function SnapshotFirebase() {

  const collectionRef = collection(db, 'unit');
  const [ units, setUnits ] = useState<any>([]);
  const [ loading, setLoading ] = useState(false);
  const [ name, setName ] = useState<any>('');
  const [ lecturer, setLecturer ] = useState<any>('');

  useEffect(() => {
    const q = query(
      collectionRef,
      where('name', '==', 'HIT333')
    );

  setLoading(true);
  const unsub = onSnapshot(collectionRef, (querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
      
    });
    setUnits(units);
    setLoading(false);
  });
  return () => {
    unsub();
  };

}, []);
}


//Pages are split into a 12 column grid//
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
        <IonGrid class="padding">
          <IonRow>
            <IonCol offset="1" size="9">
              <IonSearchbar  showClearButton='always'
              
              placeholder="Search for a unit, lecturer, or..." //2. onKeyUp={handleSearch}



              clear-icon={trashBin}></IonSearchbar>
          <IonRow>
            <IonCard>

              <IonList>

              This is for James testing results from above search bar.
              


              </IonList>

            </IonCard>
          </IonRow>


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
              <IonButton onClick={checkCollection}>This button is a button.</IonButton>
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
            geoloca: GeoPoint;
            descr: string;
            }) =>  (
                    <IonCol size="12" size-lg='4' >                     
                      <IonCard>
                        <IonCardHeader>
                        <IonCardTitle class="ion-text-capitalize">{unit.unitcode} {unit.name}</IonCardTitle>
                        </IonCardHeader>
                          <IonCardContent class="ion-text-capitalize fixedh">  
                            Room: {unit.bcolor} <br/> 
                            Lecturer: {unit.lecturer} <br/>
                            {unit.descr} 
                        </IonCardContent>              
                            <IonButton fill="clear" shape="round" routerLink='/tab1'>locate</IonButton>
                            <IonButton shape="round" routerLink='/tab3'>timetable</IonButton>             
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