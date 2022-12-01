import { Injectable } from '@angular/core';
import { Personas } from 'src/app/Domain/Personas';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  personas:any;
  

  constructor(private afs:AngularFirestore) { 
    this.PersonasCollection = afs.collection<Personas>('Personas');
  }
  private PersonasCollection: AngularFirestoreCollection<Personas>;
  getPersonasFire(){
    console.log(this.PersonasCollection);
    
    return this.PersonasCollection.valueChanges();
  }
}
