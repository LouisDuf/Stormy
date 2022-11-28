import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private auth: Auth) { }
  
  async register({ email, password }) {
		try {
			const user = await createUserWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	// async getMoreInformationAboutUser(User : User) {
	// 	try {
	// 		const user = await createUserWithEmailAndPassword(this.auth, email, password);
	// 		return user;
	// 	} catch (e) {
	// 		return null;
	// 	}
	// }
	// const dbUserRef = db.collection('users').doc(curentUser.uuid);
	// dbUserRef.set({})

	async login({ email, password }) {
		// should for all method use a cloud function to creata user  
		try {
			const user = await signInWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	logout() {
		return signOut(this.auth);
	}
}



  
