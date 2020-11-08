import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  addUser(record){
    return this.firestore.collection('experiment-users').add(record);
  }
}
