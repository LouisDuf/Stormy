import { Injectable } from '@angular/core';
import { docData } from '@angular/fire/firestore';
import { Auth } from 'firebase/auth';
import { doc, Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private firestore: Firestore, private storage: Storage) {}

	getUserProfile() {
		const user = this.auth.currentUser;
		const userDocRef = doc(this.firestore, `users/${user.uid}`);
		return docData(userDocRef, { idField: 'id' });
	}
}
