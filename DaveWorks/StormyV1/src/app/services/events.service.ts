// import { Injectable } from '@angular/core';
// import { collectionData } from '@angular/fire/firestore';
// import { Auth } from 'firebase/auth';
// import { collection, Firestore } from 'firebase/firestore';

// @Injectable({
//   providedIn: 'root'
// })

// export interface Events{
//   id:string;
//   name:string;

// }
// export class EventsService {

//   constructor(private auth: Auth, private firestore: Firestore, private storage: Storage) { }

//   getEvents(){
//     const user = this.auth.currentUser;
//     const event = collection(this.firestore,`users/${user.uid}` );
//     return collectionData(event);
//   }
// }
