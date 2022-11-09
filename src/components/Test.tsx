//HERE JUST FOR TESTING AND LEARNING PURPOSES//
import React, { useEffect, useState } from 'react';
import { IonItem, IonList, IonSearchbar } from '@ionic/react';
import { collection, where, doc, getDoc, getDocs, query, setDoc, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';



async function getResults(){
    const getDB = await getDocs(collection(db,"unit"));
    getDB.forEach((doc) => {
        id:doc.id,
      console.log(doc.id, " => ", doc.data());
    })};




export default getResults;

