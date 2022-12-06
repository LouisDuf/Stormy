import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { enableIndexedDbPersistence } from "firebase/firestore"; 
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";
import { disableNetwork } from "firebase/firestore"; 
import { collection, onSnapshot, where, query } from "firebase/firestore"; 
//import { AngularFireOfflineModule } from 'angularfire2-offline';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public db: AngularFireDatabase)
  {
      
  this.db.list('items').valueChanges().subscribe(items => {
    console.log(items);
  });

  
  // Écrire des données dans la base de données en mode déconnecté
  this.db.list('items').push({ name: 'item1' });


  // Lire les données de la base de données en mode déconnecté
  this.db.list('items').valueChanges().subscribe(items => {
    console.log(items);
  });



  }

  ngOnInit() {}

  nomTache: string = "RDV sorcière";


  testCache() {
    this.nomTache
    this.db.list('Event').push(this.nomTache)
  }

  testDeco() {
    this.nomTache="On capte plus"
    this.db.list('Event').push(this.nomTache)
  }


//   enableIndexedDbPersistence(afDB)
//   .catch((err) => {
//       if (err.code == 'failed-precondition') {
//           // Multiple tabs open, persistence can only be enabled
//           // in one tab at a a time.
//           // ...
//       } else if (err.code == 'unimplemented') {
//           // The current browser does not support all of the
//           // features required to enable persistence
//           // ...
//       }
//   });
//   // Subsequent queries will use persistence, if it was enabled successfully

//   const firestoreDb = initializeFirestore(app, {
//     cacheSizeBytes: CACHE_SIZE_UNLIMITED
//   });

//   const q = query(collection(db, "cities"), where("state", "==", "CA"));
// onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//         if (change.type === "added") {
//             console.log("New city: ", change.doc.data());
//         }

//         const source = snapshot.metadata.fromCache ? "local cache" : "server";
//         console.log("Data came from " + source);
//     });
// });

//   await disableNetwork(afDB);
//   console.log("Network disabled!");
//   // Do offline actions
//   // ...

}