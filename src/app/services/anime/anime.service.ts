import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Animes } from 'src/app/models/animes.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private dbPath = '/animes';
  animesRef: AngularFirestoreCollection<Animes>;

  constructor(
    private db: AngularFirestore
  ) {
    this.animesRef = db.collection(this.dbPath);
  }

  getAllAnimes(): any {
    return this.animesRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  
  saveNewAnime(anime : Animes):any{
    return new Observable(obs=>{
      this.animesRef.add({...anime}).then(() =>{
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.animesRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(anime: Animes) {
    return new Observable(obs => {
      this.animesRef.doc(anime.id).update(anime);
      obs.next();
    });
  }

  delete(id: any){
    this.db.doc(`animes/${id}`).delete();
  }

  UpdateFav(anime: Animes){
    return new Observable(obs => {
      this.animesRef.doc(anime.id).set(anime)
   //   this.animesRef.doc(anime.id).set(anime);
    });
  }


  

}
