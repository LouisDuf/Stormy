import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {  getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {HttpClientModule} from '@angular/common/http';

export const firebaseConfig = {
  apiKey: "AIzaSyBNz1I_FML8ucl5j95A3Y8-Q-4nqC3CZRk",
  authDomain: "stormyv1-925c1.firebaseapp.com",
  projectId: "stormyv1-925c1",
  storageBucket: "stormyv1-925c1.appspot.com",
  messagingSenderId: "239856818328",
  appId: "1:239856818328:web:eb138748e939e4fffa98ed",
  measurementId: "G-MM7W4FHF5X"
};


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideStorage(() => getStorage()),
    HttpClientModule
  ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {}


