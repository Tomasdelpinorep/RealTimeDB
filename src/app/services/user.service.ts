import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  getDocs,
  query,
} from '@angular/fire/firestore';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';

const COLLECTION_USERS = 'users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public firestore: Firestore) {}

  async createUser(name: string, age: number) {
    const docRef = await addDoc(collection(this.firestore, COLLECTION_USERS), {
      name: name,
      age: age,
    });
    console.log('Document written with ID: ', docRef.id);
  }

  getUsers(){
    const userRef = collection(this.firestore, COLLECTION_USERS);
    return collectionData(userRef, {idField: 'id'}) as Observable<any[]>;
  }
}
