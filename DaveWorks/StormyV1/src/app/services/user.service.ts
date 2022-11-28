import { Injectable } from '@angular/core';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import {
	Auth
} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private firestore: Firestore) {}

	getUserProfile() {
		const user = this.auth.currentUser;
		const userDocRef = doc(this.firestore, `users/${user.uid}`);
		// return docData(userDocRef, { idField: 'id' });
		return docData(userDocRef);

	}


	async uploadName(name: string) {
		const user = this.auth.currentUser;
		try {
			const userDocRef = doc(this.firestore, `users/${user.uid}`);
			await setDoc(userDocRef, {
				name
			});
			return true;
		} catch (e) {
			return null;
		}
	}
}
